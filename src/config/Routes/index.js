import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import About from "../../Components/pages/About";
import Dashboard from "../../Components/pages/Dashboard";
import Login from "../../Components/pages/Login";
import Register from "../../Components/pages/Register";


const Routes = () => {
    return (
        <Router>            
            <Route>
                <Switch>
                <Route exact path="/">
                        <Dashboard />
                        </Route>
                    <Route path="/login">
                            <Login title="Welcome"/>
                        <Route path="/register">
                        <Register />
                        </Route>
                        <Route path="/about">
                            <About />
                                </Route>
                    </Route>
                </Switch>
             </Route>
        </Router>
    );
};


export default Routes;
