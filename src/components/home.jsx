import React, { Component } from 'react'

import UserService from '../services/UserService';

class login extends Component{
    constructor(props) {
        super(props);
        
        this.state={
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: "",
            
        };
    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then((res) => {
          let user = res.data;
          this.setState({
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.emailId,
          });
        });
      }
      cancel() {
        this.props.history.push("/users");
    }

    render(){
        return(
            <div>
                <form>
                    <h1>Welcome {this.state.firstName} {this.state.lastName}</h1>
                    <span>your emailid is {this.state.emailId}</span><br></br>
                    <button
                        className="btn btn-danger"
                        onClick={this.cancel.bind(this)}
                        style={{ marginLeft: "10px" }}
                    >
                        Logout
                    </button>
                </form>
            </div>
        )
    }

}

export default login;