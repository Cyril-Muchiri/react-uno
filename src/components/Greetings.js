import React, { Component } from 'react';

//class components
class Greetings extends Component {
    render() {
        return (
            <div>
                <h1> Greetings , {this.props.name} !!</h1>
            </div>
        );
    }
}

export default Greetings;
