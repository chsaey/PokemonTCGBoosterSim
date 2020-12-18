import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserDataService from "../dataservices/UserDataService";
import { Formik, Form, Field } from "formik";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      redirect: false,
      id: 0
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    let user = {
      username: values.userName,
      password: values.password,
    };

    UserDataService.retrieveAllUser().then((response) => {
      response.data.forEach((element) => {
        if (
          element.userName === user.username &&
          element.password === user.password
        ) {
console.log(element)
          this.setState({
            id: element.id,
            redirect: true,
          });
        }
      });
    });
  }

  render() {
    console.log(this.state.id)

    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/Collection",
            state: { id: this.state.id }
          }}
        />
      );
    }
    let { userName, password } = this.state;
    return (
      <div className="base-container">
        <br />
        <h2>Sign In</h2>
        <div className="content">
          <Formik
            initialValues={{ userName, password }}
            onSubmit={this.onSubmit}
            enableReinitialize={true}
          >
            {(props) => (
              <Form className="form">
                <fieldset className="form-group">
                  <label>Username</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="userName"
                    placeholder="username"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Password</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="password"
                    placeholder="password"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <button className="btn" type="submit">
                    Sign In
                  </button>
                </fieldset>
                <br />
                <br />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
