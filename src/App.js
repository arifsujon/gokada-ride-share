import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Destination from "./components/Destination/Destination";
import SearchResult from "./components/SearchResult/SearchResult";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination/searchResult">
            <SearchResult />
          </PrivateRoute>
          <PrivateRoute path="/destination/:vehicleType">
            <Destination />
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
