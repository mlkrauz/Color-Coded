import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/Navigation';
import store from './utils/store';
import { Provider } from 'react-redux';
import { UserProvider } from './utils/userContext.js'
import Design from './pages/Design';
import Export from './pages/Export';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/design" component={Design} />
             <Route exact path="/export" component={Export} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/signup" component={Signup} />
          </Switch> 
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
