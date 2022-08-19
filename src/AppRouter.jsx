import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components imports
import Homepage from "./Pages/Homepage/Homepage";
// import Header from "./Components/Core/Header/Header";
import Forgotpassword from "./Pages/Auth/ForgotPassword";
import NewPassword from "./Pages/Auth/NewPassword";
import ResetComplete from "./Pages/Auth/ResetComplete";
import Signin from "./Pages/Auth/Signin/Signin";
import Signup from "./Pages/Auth/Signup/Signup";
import VerifyEmail from "./Pages/Auth/VerifyEmail";

const AppRouter = () => {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/auth/signup' component={Signup} />
          <Route path='/auth/signin' component={Signin} />
          <Route path='/auth/reset-password' component={Forgotpassword} />
          <Route path='/auth/verify' component={VerifyEmail} />
          <Route path='/auth/new-password' component={NewPassword} />
          <Route path='/auth/reset-success' component={ResetComplete} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
