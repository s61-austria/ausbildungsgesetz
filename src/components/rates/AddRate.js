import React from 'react'
import RateForm from "./RateForm";
import {connect} from "react-redux";


class AddRate extends React.Component {
    constructor(props) {
        super(props);

        this.submit = rate => console.log(rate)
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

export default connect(mapStateToProps, {})(AddRate)