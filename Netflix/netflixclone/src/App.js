import React from 'react';
import LoginScreen from "./screens/LoginScreen";
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {auth} from "./firebase";
import {login,logout,selectUser} from"./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen"

function App() {
// const user = null;
const user =useSelector(selectUser);
const dispatch = useDispatch();


//to keep the user persistant
useEffect(() =>
{
//setting up a listener takes up some space in the memory of the browswer
  //knows the user loggin in from before
//on AuthStateChangd once the user is logged in from the firebase now the user can be accessed from anywhere in the app

const unsubscribe = auth.onAuthStateChanged((userAuth) =>
{
    if(userAuth)
    {
      //LoggedIn
      // console.log(userAuth);
      dispatch(
        login({
        uid: userAuth.uid,
        email: userAuth.email,
      })
      );

    }
    else{
      //logged out
      dispatch(logout());
    }

  });
    //detatch the old listener and attch a new one 
    //when it cleans up  run unsubscribe function 
   
  return  unsubscribe;
  
  

    },[dispatch]);


  return (
    <div className="app">
    
     <Router>
      {!user ? (
        <LoginScreen />
      ) : (

        <Switch>
        <Route path ="/profile">
          <ProfileScreen />
          </Route>
          <Route exact path="/">
          <HomeScreen />
          </Route>
      
        </Switch>

      )}
      

       
    
    </Router>

    </div>
  );
}

export default App;
