import React from 'react'
import {hashHistory} from 'react-router'
import {Field, propTypes, reduxForm} from "redux-form";
import {TextField} from 'redux-form-material-ui'
import {RaisedButton} from "material-ui";


export const LoginForm = (props) => (
    <div className="login-container">
        <form onSubmit={props.handleSubmit} className="login-form">
            <h2>Login</h2>
            <Field
                component={TextField}
                floatingLabelText="Username"
                name="username"
                fullWidth
            />

            <Field
                component={TextField}
                type="password"
                floatingLabelText="Password"
                name="password"
                errorText={props.isFailed ? "Are you sure this is correct?" : null}
                fullWidth
            />

            <RaisedButton
                label="Login"
                type="submit"
                disabled={props.isFetching}
                primary
            />

            <RaisedButton
                label="Register"
                onClick={() => hashHistory.push("/register")}
                secondary
            />
        </form>
    </div>
)

LoginForm.propTypes = propTypes;

export default reduxForm({
    form: 'loginForm'
})(LoginForm)