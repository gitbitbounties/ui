import React, {Component} from 'react';

class UserBounties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            balance: "",
            activeBounties: "",
            completedBounties: ""
        }
    }

    /*
    // update start to the value returned by the Select component
    handleUpdateStart = (newStart) => {
        this.setState({start: newStart})
    };

    // Update end to the value returned by the Select component
    handleUpdateEnd = (newEnd) => {
        this.setState({end: newEnd})
    };
    */

    /*
    // if clear is clicked, resets edges so it can be cleared
    handleClear = () => {
        this.setState({start: "", end: ""});
    };
    */

    render() {
        return (
            <div className="center-text">
                <h1> Balance </h1>
                <p> {this.state.balance} sat </p>
                <h1> Deposit </h1>
            </div>
        );
    }
}

export default UserBounties;