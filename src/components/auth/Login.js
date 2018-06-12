import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'
import {connect} from "react-redux"
import {login} from "../../actions/auth"
import {hashHistory} from 'react-router'

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.submit = credentials => this.props.login(credentials)
            .then(() => hashHistory.push("/"))


    }

    componentDidMount(){
        if (this.props.isLoggedIn) hashHistory.push("/")
    }

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.submit} isFetching={this.props.isFetching} isFailed={this.props.isFailed} />
            </div>
        )
    }
}

Login.propTypes = {
    isFetching: PropTypes.bool,
    isFailed: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func,
    register: PropTypes.func
}

function mapStateToProps(state){
    return {
        isFetching: state.auth.isFetching,
        isFailed: state.auth.isFailed,
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, {login: login}) (Login)