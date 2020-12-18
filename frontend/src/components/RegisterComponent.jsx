import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import UserDataService from '../dataservices/UserDataService';



class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            userName: '',
            password: '',
            renderLogin: false
        }
        this.onSubmit = this.onSubmit.bind(this)
    }



    onSubmit(values) {
        let user = {
            userName: values.userName,
            password: values.password,
            renderLogin:true
        }
        UserDataService.createUser(user)
        
        alert("User created")

    }

    render() {
        let {userName, password} = this.state
        return (
            <div className="base-container">
                <br/>
                <h2 className="header">Register</h2>
                <div className="content">
                    
                    <Formik
                        initialValues={{userName, password}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form className="form">
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field className="form-control" type="text" name="userName" placeholder="userName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" type="text" name="password" placeholder="password" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <button className="btn" type="submit">Register</button>
                                    </fieldset>
                                    <br/>
                                    <br/>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default RegisterComponent;