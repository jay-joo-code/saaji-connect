import React from 'react';
import { connect } from 'react-redux';
// import { increment } from 'src/redux/actions/counter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </BrowserRouter>
            )
    }
}

export default connect(null, {  })(App);
