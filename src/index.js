import React from 'react';
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 import * as serviceWorker from './serviceWorker';
import { createStore ,applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer'
import {Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createFirestoreInstance,reduxFirestore, getFirestore} from 'redux-firestore'
import { getFirebase} from 'react-redux-firebase'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)
    
  )
);

function AuthIsLoaded({ children }) {

  const auth = useSelector(state => state.firebase.auth)

  if (!isLoaded(auth)) return <div className="red-text center"> Loading ...</div>;

      return children

}



const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true ,
  attachAuthIsReady : true
};


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};



ReactDOM.render(<Provider store={store}> 
<ReactReduxFirebaseProvider {...rrfProps}> 
<AuthIsLoaded><App /> </AuthIsLoaded>
</ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();

