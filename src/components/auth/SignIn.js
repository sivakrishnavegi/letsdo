import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Modal'
class SignIn extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
            email : '',
            password : '',
            show: false,
             setShow:false
     }
 }
 


 
 handleChange = (e) => {
     console.log(e)
     this.setState({
         [e.target.id] : e.target.value
     })
 }

 handleSubmit = (e) => {
   
    e.preventDefault();
   this.props.signIn(this.state)
}

sendPasswordReset =() => {
    let email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      alert('Password Reset Email Sent!');
    }).catch(err => {
      console.error(err); 
      
      alert(err)
    })
  }



signInHandler =()=>{
    if (!firebase.auth().currentUser) {
        // [START createprovider]
        var provider = new firebase.auth.GoogleAuthProvider();
        // [END createprovider]
        // [START addscopes]
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // [END addscopes]
        // [START signin]
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // [START_EXCLUDE]
          document.getElementById('quickstart-oauthtoken').textContent = token;
          // [END_EXCLUDE]
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // [START_EXCLUDE]
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
          } else {
            console.error(error);
          }
          // [END_EXCLUDE]
        });
        // [END signin]
      } else {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      }
}


   

    render() {
      
            //destrucing exists or not error messagee
        const { authError, auth } = this.props
        if(auth.uid) return <Redirect to='/' />

        return (
        
         
            <div className="container col m4 lg-col-4">
                <form onSubmit={this.handleSubmit} className="white col s6 m6 l6">
                    <h5 className="grey-text text-darken-3">SignIn</h5>
                    <div className="input-field">
                    <i class="material-icons prefix">account_circle</i>
                        <label htmlFor="email">Email</label>
                       
                        <input type="email" id="email" onChange={this.handleChange} class=""></input>
                    </div>
                    <div className="input-field">
                    <i class="material-icons prefix">lock</i>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">Login</button> <button className="btn pink lighten-1 z-depth-0" onClick={this.signInHandler}>google Login</button> <button className="btn pink lighten-1 z-depth-0" onClick={this.sendPasswordReset}>Reset Password ?</button> 
                      <a href="https://rzp.io/l/WFsbxle" >pay_now</a>
                    </div>
                    
                    
                   <div className="red-text center">
               { authError ? <p>{authError} </p> :null }
                    </div>
                 
                </form>
              
        
            </div>
        )
    }
}
//errorMsg
const mapStateToProps=(state)=>{
 return{
     authError : state.auth.authError,
     auth : state.firebase.auth
 }
}


const mapDispatchToProps= (dispatch) =>
{
return {
    signIn : (creds) => dispatch(signIn(creds))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)