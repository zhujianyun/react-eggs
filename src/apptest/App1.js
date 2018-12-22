import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Iconfont } from './statics/iconfont';


class About extends Component {
  render() {
    return <h3>About~~</h3>
  }
}

class Inbox extends Component {
  render() {
    return (
      <div>
        <h2>Inbox~~</h2>
        <Link to='/inbox/message/1'>inbox-->message</Link>
        <Route path='/inbox/message/:id' component={Message}></Route>
      </div>
    )
  }
}

class Message extends Component {
  render() {
    return <h3>Message {this.props.match.params.id}</h3>
  }
}

class Box extends Component {
  render() {
    return (
      <div>
        <h1>Box</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        <Route path='/about' component={About}></Route>
        <Route path='/inbox' component={Inbox}></Route>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <GlobalStyle />
            <Iconfont />
            <Route path='/' component={Box}>
            </Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
