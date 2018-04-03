import React from 'react'
import PropTypes from 'prop-types'
import RateForm from "./RateForm";
import {connect} from "react-redux";
import {addRate} from "../../actions/rate";


class AddRate extends React.Component {
    constructor(props) {
        super(props);

        this.submit = rate => this.props.addRate(rate);
    }

    render() {
        return (
            <RateForm onSubmit={this.submit}/>
        )
    }
}

AddRate.propTypes = {
    addRate: PropTypes.func
};

export function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {
    addRate: addRate
})(AddRate)