import React, {Component} from 'react';
import './App.css';
import MainContainer from './MainContainer';
import UserBounties from './UserBounties'

class App extends Component {
    render() {
        return (
            <div className="UserBounties">
                <UserBounties />
            </div>
        );
    }
}

export default App;