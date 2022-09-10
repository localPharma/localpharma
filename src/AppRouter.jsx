import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components imports
import Homepage from "./Pages/Homepage/Homepage";
import Forgotpassword from "./Pages/Auth/ForgotPassword";
import NewPassword from "./Pages/Auth/NewPassword";
import ResetComplete from "./Pages/Auth/ResetComplete";
import Signin from "./Pages/Auth/Signin/Signin";
import Signup from "./Pages/Auth/Signup/Signup";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import Vendorsignup from "./Pages/Auth/Vendor/Vendorsignup";
import Vendorsignin from "./Pages/Auth/Vendor/Vendorsignin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import PageNotFound from "./Pages/404/PageNotFound";
import Pharmaciespage from "./Pages/Pharmaciespage/Pharmaciespage";
import Pharmacypage from "./Pages/Pharmacypage/Pharmacypage";
import Categoriespage from "./Pages/Categories/Categoriespage";
import Productspage from "./Pages/Productspage/Productspage";
import Productpage from "./Pages/Productpage/Productpage";
import Cartpage from "./Pages/Cartpage/Cartpage";
import Profilepage from "./Pages/Profile/Profilepage";
import Historypage from "./Pages/Historypage/Historypage";

const AppRouter = () => {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/pharmacies" component={Pharmaciespage} />
          <Route path="/categories" component={Categoriespage} />
          <Route path="/cart" component={Cartpage} />
          <Route path="/pharmacypage/:id" component={Pharmacypage} />
          <ProtectedRoute path="/profile/:id" component={Profilepage} />
          <ProtectedRoute path="/history/:id" component={Historypage} />
          <Route path="/products" component={Productspage} />
          <Route path="/product/:id" component={Productpage} />
          <ProtectedRoute path="/auth/signup" component={Signup} />
          <ProtectedRoute path="/auth/signin" component={Signin} />
          <ProtectedRoute
            path="/auth/reset-password"
            component={Forgotpassword}
          />
          <ProtectedRoute path="/auth/verify" component={VerifyEmail} />
          <ProtectedRoute path="/auth/new-password" component={NewPassword} />
          <ProtectedRoute
            path="/auth/reset-success"
            component={ResetComplete}
          />
          <Route path="/auth/open-pharmacy" component={Vendorsignup} />
          <Route path="/auth/login-pharmacy" component={Vendorsignin} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
