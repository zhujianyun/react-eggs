import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h3><Link to='/'>Home</Link></h3>
        <Header />
        <Body />
        <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
        </ul>
      </div>
    );
}

function About() {
    return (
        <div>
        <h2>About</h2>
        </div>
    );
}

function Header() {
    return (
      <div>
        <h4>Home--Header</h4>
      </div>
    );
}

function Body() {
    return (
        <div>
        <h4>Home--Body</h4>
        </div>
    );
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2> 
            <ul>
                <li><Link to={`${match.path}/rendering`}>Rendering with React</Link></li>
                <li><Link to={`${match.path}/components`}>Components</Link></li>
                <li><Link to={`${match.path}/props-v-state`}>Props v. State</Link></li>
            </ul>
            {/* <Route path={`${match.path}/:topicId`} component={Topic}></Route> */}
        </div>
    )
}

class Topic extends Component {
    render() {
        return (
            <h3>{this.props.match.params.topicId}</h3>
        )
    }
}


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <Switch> */}
                        <Route path='/' component={Home}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topics' component={Topics}></Route>
                        <Route path='/topics/:topicId' component={Topic}></Route>
                    {/* </Switch> */}
                    
                </div>
            </BrowserRouter>
        )
    }
}
export default App;