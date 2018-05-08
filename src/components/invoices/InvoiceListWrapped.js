import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {CircularProgress} from "material-ui";
import InvoiceListFilter from "./InvoiceListFilter";
import {fetchInvoices, fetchInvoicesForVehicle} from "../../actions/invoice";

class InvoiceListWrapped extends React.Component {
    componentDidMount() {
        switch(this.props.type){
            case 'vehicle':
                this.props.fetchInvoicesForVehicle(this.props.id);
                break;
            case 'civilian':
                break;
            default:
                this.props.fetch()
        }
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <CircularProgress/> :
                    <InvoiceListFilter
                        invoices={this.props.id === undefined ? this.props.invoices : this.props.invoiceMap[this.props.id] || []}/>}
            </div>
        )
    }
}

InvoiceListWrapped.propTypes = {
    isFetching: PropTypes.bool,
    invoices: PropTypes.array,
    id: PropTypes.string,
    type: PropTypes.string,
    fetch: PropTypes.func,
    fetchInvoicesForVehicle: PropTypes.func,
    invoiceMap: PropTypes.shape({})
};

function mapStateToProps(state, ownProps) {
    return {
        isFetching: state.invoice.isFetching,
        invoices: state.invoice.invoices,
        invoiceMap: state.invoice.invoiceMap,
        id: ownProps.id,
        type: ownProps.type
    }
}

export default connect(mapStateToProps, {
    fetch: fetchInvoices,
    fetchInvoicesForVehicle: fetchInvoicesForVehicle
})(InvoiceListWrapped)