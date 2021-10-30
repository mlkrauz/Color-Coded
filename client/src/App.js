import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { 
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Colorswatch from './components/Colorswatch';;

function App() {
  return (
    // <ApolloProvider >
      <Router>
        <div>
            <Navbar />
            <Welcome />
            <Colorswatch />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
        </div>
      </Router>
    // </ApolloProvider>
  );
}



export default App;
