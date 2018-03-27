import React from 'react'
import PropTypes from 'prop-types'
import {InvoiceList} from "./InvoiceList";
import {connect} from "react-redux";
import {fetchInvoices, regenerateInvoice} from "../../actions/invoice";

export class InvoiceListWrapped extends React.Component {
    componentDidMount(){
        this.props.fetchInvoices();
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <p>LOADING...</p>: <p></p>}
                {this.props.children}
                <InvoiceList invoices={this.props.invoices} regenerateInvoice={this.props.regenerateInvoice}/>
            </div>
        )
    }
}

InvoiceListWrapped.propTypes = {
    isFetching: PropTypes.bool,
    invoices: PropTypes.array,
    fetchInvoices: PropTypes.func,
    regenerateInvoice: PropTypes.func
};

function mapStateToProps(state) {
    return {
        isFetching: state.invoice.isFetching,
        invoices: state.invoice.invoices
    }
}

export default connect(mapStateToProps, {
    fetchInvoices: fetchInvoices,
    regenerateInvoice: regenerateInvoice
})(InvoiceListWrapped)