import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'





const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks {...auth} /> : <SignedOutLinks /> ;
    return (
        <nav className = "nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">VSK</Link>
                 {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.users
    }
}
export default connect (mapStateToProps)(Navbar);