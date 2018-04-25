import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import PrivateRoute from './components/auth/PrivateRoute';
import store from './store';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dash from './components/Dashboard';
import Watch from './components/Watch';
import Play from './components/Play';
import Read from './components/Read';
import Listen from './components/Listen';
import Navbar from './components/layout/Navbar';

//check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
//expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Switch>
                <PrivateRoute exact path="/dashboard" component={Dash} />

          <PrivateRoute exact path="/watch" component={Watch} />
          <PrivateRoute exact path="/play" component={Play} />
          <PrivateRoute exact path="/read" component={Read} />
          <PrivateRoute exact path="/listen" component={Listen} />
                    </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
