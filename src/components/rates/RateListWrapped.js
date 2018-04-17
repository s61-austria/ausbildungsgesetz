import React from 'react'
import PropTypes from 'prop-types'
import {RateList} from "./RateList";
import {connect} from "react-redux";
import {fetchRates, updateRate} from "../../actions/rate";

export class RateListWrapped extends React.Component {
    componentDidMount(){
        this.props.fetchRates();
    }
    render() {
        return (
            <div className="listBody">
                {this.props.isFetching ? <p>LOADING</p>: <p></p>}
                {this.props.isFailed ? <p>Failed loading rates!</p> : <p></p>}
                <RateList
                    rates={this.props.rates}
                    updateRate={this.props.updateRate}
                    isUpdated={this.props.isUpdated}
                    isUpdateFailed={this.props.isUpdateFailed} />
            </div>
        )
    }
}

RateListWrapped.propTypes = {
    isFetching: PropTypes.bool,
    isFailed: PropTypes.bool,
    isUpdated: PropTypes.bool,
    isUpdateFailed: PropTypes.bool,
    rates: PropTypes.array,
    fetchRates: PropTypes.func,
    updateRate: PropTypes.func,
};

function mapStateToProps(state) {
    return {
        isFetching: state.rate.isFetching,
        rates: state.rate.rates,
        isUpdated: state.rate.isUpdated,
        isFailed: state.rate.isFailed,
        isUpdateFailed: state.rate.isUpdateFailed,
    }
}

export default connect(mapStateToProps, {
    fetchRates: fetchRates,
    updateRate: updateRate,
})(RateListWrapped)