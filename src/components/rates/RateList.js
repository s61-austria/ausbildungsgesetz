import React from 'react'
import PropTypes from 'prop-types'
import {RateItem} from './RateItem'
import {vehicle} from "../../reducers/vehicle";

export class RateList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.rates.map(rate => <RateItem rate={rate}/>)}
            </div>
        )
    }
}

RateList.propTypes = {
    rates: PropTypes.array.isRequired
};