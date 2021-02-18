import React, { Component } from 'react'

import UserService from '../services/UserService';


class login extends Component{
    constructor(props) {
        super(props);
        
        this.state={
            // id: this.props.match.params.id, 
            emailId: "",
            Password:"",
        };
        this.changeEmailHandler = this.changeEmailHandler.bind(this);  
        this.changePasswordHandler = this.changePasswordHandler.bind(this); 
        this.LoginUser = this.LoginUser.bind(this);

    }
    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    };

    changePasswordHandler = (event) => {
        this.setState({ Password: event.target.value });
    };

    cancel() {
        this.props.history.push("/users");
    }

    LoginUser = (e) => {
        e.preventDefault();
    
        let user = {
          emailId: this.state.emailId,
          Password: this.state.Password,
        };
    
        console.log("user => " + JSON.stringify(user));

        UserService.loginUser(user).then((res) => {
            console.log("res", res)
            if(res.data=="Wrong Password")
            {
                alert("Please enter correct password")
                this.setState({
                    emailId: "",
                    Password: "",
                })
                this.props.history.push("/login");
            }
            else{
                this.props.history.push(`/home/${res.data.id}`);
            }
        });
        // console.log(this.state.id)
    
        // if (this.state.id === "login-User") {
        //   UserService.loginUser(user).then((res) => {
        //     this.props.history.push("/users");
        //   });
        // } else {
        //   UserService.updateUser(user, this.state.id).then((res) => {
        //     this.props.history.push("/users");
        //   });
        // }
};

    render(){

        return(
            <div>
               <br></br>
        
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            Login
                
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input
                                            placeholder="Email Address"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.emailId}
                                            onChange={this.changeEmailHandler}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label> Password: </label>
                    
                                        <input
                                            placeholder="Password"
                                            name="Password"
                                            className="form-control"
                                            value={this.state.Password}
                                            onChange={this.changePasswordHandler}
                                        />
                                    </div>

                                    <button
                                        className="btn btn-success"
                                        onClick={this.LoginUser}
                                    >
                                        login
                                    </button>
                    
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}
export default login;
