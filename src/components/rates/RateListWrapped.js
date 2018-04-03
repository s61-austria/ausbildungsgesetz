import React from 'react'
import PropTypes from 'prop-types'
import {RateList} from "./RateList";
import {connect} from "react-redux";
import {fetchRates} from "../../actions/rate";

export class RateListWrapped extends React.Component {
    componentDidMount(){
        this.props.fetchRates();
    }
    render() {
        return (
            <div>
                {this.props.isFetching ? <p>LOADING</p>: <p></p>}
                {this.props.children}
                <RateList rates={this.props.rates}/>
            </div>
        )
    }
}

RateListWrapped.propTypes = {
    isFetching: PropTypes.bool,
    rates: PropTypes.array,
    fetchRates: PropTypes.func
};

function mapStateToProps(state) {
    return {
        isFetching: state.rate.isFetching,
        rates: state.rate.rates
    }
}

export default connect(mapStateToProps, {
    fetchRates: fetchRates
})(RateListWrapped)