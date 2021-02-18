import React, { Component } from 'react'
import UserService from "../services/UserService";



class CreateUserComponent extends Component{
    constructor(props) {
        super(props);
        
        this.state={
            id: this.props.match.params.id,
            firstName: "",
            lastName: "", 
            emailId: "",
            Password:"",
        };
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);  
        this.changePasswordHandler = this.changePasswordHandler.bind(this); 
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    };
    
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    };
    
    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    };

    changePasswordHandler = (event) => {
        this.setState({ Password: event.target.value });
    };
    
    cancel() {
        this.props.history.push("/users");
    }


    getTitle() {
        if (this.state.id === "_add") {
          return <h3 className="text-center">Add User</h3>;
        } else {
          return <h3 className="text-center">Update User</h3>;
        }
      }

    saveOrUpdateUser = (e) => {
        e.preventDefault();
    
        let user = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailId: this.state.emailId,
          Password: this.state.Password,
        };
    
        console.log("user => " + JSON.stringify(user));
    
        if (this.state.id === "_add") {
          UserService.createUser(user).then((res) => {
            this.props.history.push("/users");
          });
        } else {
          UserService.updateUser(user, this.state.id).then((res) => {
            this.props.history.push("/users");
          });
        }
    };

    
    render(){

        return(
            <div>
               <br></br>
        
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                    
                                        <input
                                            placeholder="First Name"
                                            name="firstName"
                                            className="form-control"
                                            value={this.state.firstName}
                                            onChange={this.changeFirstNameHandler}
                                        />
                                    </div>
                    
                                    <div className="form-group">
                                        <label> Last Name: </label>
                    
                                        <input
                                            placeholder="Last Name"
                                            name="lastName"
                                            className="form-control"
                                            value={this.state.lastName}
                                            onChange={this.changeLastNameHandler}
                                        />
                                    </div>
                    
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
                                        onClick={this.saveOrUpdateUser}
                                    >
                                        Save
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
export default CreateUserComponent;