import React from 'react'
import PropTypes from 'prop-types'
import RateForm from "./RateForm";
import {connect} from "react-redux";
import {updateRate} from "../../actions/rate";


class UpdateRate extends React.Component {
    constructor(props) {
        super(props);

        this.submit = rate => this.props.updateRate(rate)
    }

    render() {
        return (
            <RateForm onSubmit={this.submit}/>
        )
    }
}

UpdateRate.propTypes = {
    updateRate: PropTypes.func
};

export function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {
    updateRate: updateRate
})(UpdateRate)