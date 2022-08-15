import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Core/Header/Header";
import Signin from "./Pages/Auth/Signin/Signin";
import Signup from "./Pages/Auth/Signup/Signup";

// Components imports
import Homepage from "./Pages/Homepage/Homepage";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/auth/signup' component={Signup} />
          <Route path='/auth/signin' component={Signin} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
