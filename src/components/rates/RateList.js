import React from 'react'
import PropTypes from 'prop-types'
import {RateItem} from './RateItem'
import {Snackbar} from "material-ui";

export class RateList extends React.Component {

    render() {
        return (
            <div>
                {this.props.rates.map(rate => <RateItem
                    key={rate.uuid}
                    rate={rate}
                    updateRate={this.props.updateRate}
                />)}

                <Snackbar
                    open={this.props.isUpdated ? true : false}
                    message="Rate has been updated"
                    autoHideDuration={2000} />

                <Snackbar
                open={this.props.isUpdateFailed ? true : false}
                message="Invalid price"
                autoHideDuration={2000} />
            </div>
        )
    }
}

RateList.propTypes = {
    isUpdated: PropTypes.bool,
    isUpdateFailed: PropTypes.bool,
    rates: PropTypes.array.isRequired,
    updateRate: PropTypes.func.isRequired,
};