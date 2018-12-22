import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <GlobalStyle />
            <Iconfont />
              <Switch>
                <Route path='/login' component={Login} exact></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/' component={Home}></Route>
              </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
