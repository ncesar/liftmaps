import React from 'react';
import Map from './layout/Map';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './auth/PrivateRoute';
import { Admin } from './components/Admin/Admin';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/admin-cms" component={Admin} />
        <Route exact path="/" component={Map} />
      </Router>
    </AuthProvider>
  );
};

export default App;
