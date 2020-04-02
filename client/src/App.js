import React from 'react';
import Map from './layout/Map';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './auth/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/" component={Map} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
