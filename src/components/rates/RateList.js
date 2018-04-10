import React from 'react'
import PropTypes from 'prop-types'
import {RateItem} from './RateItem'
import {rate} from "../../reducers/rate";

export class RateList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.rates.map(rate => <RateItem
                    key={rate.uuid}
                    rate={rate}
                    updateRate={this.props.updateRate}
                />)}
            </div>
        )
    }
}

RateList.propTypes = {
    rates: PropTypes.array.isRequired,
    updateRate: PropTypes.func.isRequired,
};