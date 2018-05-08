import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {CircularProgress} from "material-ui";
import InvoiceListFilter from "./InvoiceListFilter";
import {fetchInvoices, fetchInvoicesForVehicle} from "../../actions/invoice";

class InvoiceListWrapped extends React.Component{
    componentDidMount(){
        if(this.props.vehicleId === undefined){
            this.props.fetch()
        }else {
            this.props.fetchInvoicesForVehicle(this.props.vehicleId)
        }
    }

    render(){
        return(
            <div>
                {this.props.isFetching ? <CircularProgress />: <InvoiceListFilter invoices={this.props.invoices}/>}
            </div>
        )
    }
}

InvoiceListWrapped.propTypes = {
    isFetching: PropTypes.bool,
    invoices: PropTypes.array,
    vehicleId: PropTypes.string,
    fetch: PropTypes.func,
    fetchInvoicesForVehicle: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        isFetching: state.invoice.isFetching,
        invoices: state.invoice.invoices,
        vehicleId: ownProps.vehicleId
    }
}

export default connect(mapStateToProps,{
    fetch: fetchInvoices,
    fetchInvoicesForVehicle: fetchInvoicesForVehicle
})(InvoiceListWrapped)