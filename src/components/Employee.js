import React from 'react';

class Employee extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "Chief"
        }
    }

    updateEmployee() {
        this.setState({
            firstName: "Kim"
        }
        )
    }

    render() {
        return (
            <div>
                <h1>Employee details</h1>
                <p>first name : {this.state.firstName}</p>
                <button onClick={()=> this.updateEmployee()}>updateButton</button>
                
            </div>
        );
    }
}

export default Employee;
