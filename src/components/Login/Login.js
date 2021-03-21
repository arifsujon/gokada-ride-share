import React, { useState } from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import { useContext } from 'react';
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  const handleSignOut = () => {
      firebase.auth().signOut()
        .then(res => {
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
            photo: '',
            error: '',
            success: false
          }
          setUser(signedOutUser)
        })
        .catch(err => {
          // An error happened.
        })
      console.log('sign out clicked');
  }

    

   
    
  const handleGoogleSignIn = () => {
      
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
        
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    let isFieldValid = true ;
    if (e.target.name === 'email') {
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        // console.log(isEmailValid);
    }
    if (e.target.name === 'password') {
        const isPasswordValid = e.target.value.length>5;
        const passwordHasNumber = /\d{1}/.test(e.target.value);

        isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
      // console.log(user.email, user.password);
    if(newUser && user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in 
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUserName(user.name);
        })
        .catch((error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
            console.log(newUserInfo, newUserInfo.error);
          // ..
        });
    }
    if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            // Signed in
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
            console.log('sign in user info', res.user);
  
          })
          .catch((error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
            console.log(newUserInfo, newUserInfo.error);
          });
    }
    e.preventDefault();
  }

  const updateUserName = name => {
      var user = firebase.auth().currentUser;
  
      user.updateProfile({
        displayName: name
      }).then(function () {
        // Update successful.
        console.log(('username update successfully'));
      }).catch(function (error) {
        // An error happened.
        console.log(error);
      });
  }

  return (
      <div className="container mt-5">
        <div className="form-section mx-auto">
          <h5>Create an account</h5>
          <input className="mr-2" type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
          <label htmlFor="newUser">New User Sign Up</label>
          <form onSubmit={handleSubmit}>
              {newUser && <input name="name" onBlur={handleBlur} type="text" placeholder="Your Name" />}
              <br />
              <input type="text" onBlur={handleBlur} placeholder="Your Email Address" required name="email" />
              <br />
              <input type="password" onBlur={handleBlur} placeholder="Your Password" required name="password" />
              <br />
              <input className="mb-0 sign-btn" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
          </form>
          <p style={{ color: 'red' }}>{user.error}</p>
          { user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>} 
          <p className="text-center">or</p>
          <button className="sign-btn mb-3" style={{width: '100%'}} onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
          
      </div>
  );
};

export default Login;