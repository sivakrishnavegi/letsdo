
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

import { FirebaseDatabaseProvider } from "@react-firebase/database";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import { CircularProgress } from "@material-ui/core";
import Account from './components/account/account';
class App extends Component {
  render() {
    return (
      <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <FirebaseAuthConsumer>
        {({ user, providerId }) =>
          providerId ? (
      <BrowserRouter>
        <div>
       <Navbar />
    
       <Switch>
      
         <Route exact path='/'  user={user} component={Dashboard} />
        
         <Route path='/project/:id' component={ProjectDetails} />
         
         <Route path='/signin' component={SignIn} />
        
         <Route path='/signup' component={SignUp} />
         <Route path='/create' component={CreateProject} />
         <Route path='/accountdetails' component={Account} />
       </Switch>
        </div>
      </BrowserRouter>
         ) : (
          <CircularProgress />
        )
      }
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  </FirebaseDatabaseProvider>
    )
  }
}
export default App;