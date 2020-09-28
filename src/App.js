import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from './hooks';

export default function App() {
  
      const { user } = useAuthListener();
  
      return (
        <Router>
          <Switch>
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_IN}
              exact
            >
              <SignIn />
            </IsUserRedirect>

            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_UP}
              exact
            >
              <SignUp />
            </IsUserRedirect>

            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
              <Browse />
            </ProtectedRoute>

            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.HOME}
            >
              <Home />
            </IsUserRedirect>
          </Switch>
        </Router>
      );
};


