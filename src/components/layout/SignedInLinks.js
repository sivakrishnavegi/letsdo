import React, {  } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'
import firebase from 'firebase'

const status =()=> {
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
  
      // //  document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
      //  document.getElementById('details').src = photoURL;
      //  document.getElementById('detail').src = photoURL;
      //  document.getElementById('displayName').textContent = "Name :"+ displayName;
      //  document.getElementById('email').textContent ="EmailId :"+ email;
      //  document.getElementById('emailVerify').textContent ="EmailId verifed status :"+ emailVerified;
        // [END_EXCLUDE]
      } else {
        // User is signed out.
        // // [START_EXCLUDE]
        // document.getElementById('details').src = " ";
        // document.getElementById('detail').src = " ";
        // document.getElementById('quickstart-account-details').textContent = 'null';
      //  document.getElementById('details').src = " ";
        // [END_EXCLUDE]
      }
      // [START_EXCLUDE]
   
      // [END_EXCLUDE]
    });
}

const SignedInLinks = (props) => {
  const imgur =props.photoURL.toLowerCase()
   console.log(imgur)
    return(
      
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a href={" "} onClick={props.signOut}>Log Out</a></li>
    <li><NavLink to='/accountDetails' className='btn btn-floating green lighten-1'><img src={props.photoURL} id="detail" alt="" className="circle responsive-img"  onClick={status()}></img></NavLink></li>
        </ul>
    )
}





const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);