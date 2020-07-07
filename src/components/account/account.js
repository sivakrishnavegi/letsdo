import React, { Component } from 'react'
import firebase from 'firebase';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
 class Account extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
               title : '',
               content : ''
        }
    }
    
    status =()=> {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              // [START_EXCLUDE]
        
            //  document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
             document.getElementById('details').src = photoURL;
            
             document.getElementById('displayName').textContent = "Name :"+ displayName;
             document.getElementById('email').textContent ="EmailId :"+ email;
             document.getElementById('emailVerify').textContent ="EmailId verifed status :"+ emailVerified;
              // [END_EXCLUDE]
            } else {
              // User is signed out.
              // [START_EXCLUDE]
          
              document.getElementById('quickstart-account-details').textContent = 'null';
            //  document.getElementById('details').src = " ";
              // [END_EXCLUDE]
            }
            // [START_EXCLUDE]
         
            // [END_EXCLUDE]
          });
     }
   
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div class="row">

            <div class="col s4">
            <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" id ="details" onClick={this.status()}  src=" " />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Account Detaills<i class="material-icons right">more_vert</i></span>
              <p><a href="#"  >This is a link</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Card Title <i class="material-icons right">close</i></span>
             
                     <p id="displayName" ></p>
                     <p id="email"></p>
                     <p id="emailVerify" ></p>
            </div>
          </div>
            </div>
            <div class="col s6">
            
            </div>
           
      
          </div>
           
                    
                  
        )
    }
}



const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

// const mapDispatchToProps = (dispatch) => {
// return {
//    createProject : (project)=> dispatch(createProject(project))
// }
// }

export default connect(mapStateToProps,null)(Account)