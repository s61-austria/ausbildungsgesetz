import React from 'react'
import RateForm from "./RateForm";
import {connect} from "react-redux";
import {updateRate} from "../../actions/rate";


class UpdateRate extends React.Component {
    constructor(props) {
        super(props);

        this.submit = rate => updateRate(rate)
    }

    render() {
        return (
            <RateForm onSubmit={this.submit}/>
        )
    }
}

export function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {})(UpdateRate)