import React from 'react'
import PropTypes from 'prop-types'
import {InvoiceItem} from "./InvoiceItem";
import {regenerateInvoice} from "../../actions/invoice";

export class InvoiceList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.invoices.map(invoice => <InvoiceItem invoice={invoice} regenerateInvoice={regenerateInvoice}/>)}
            </div>
        )
    }
}

InvoiceList.propTypes = {
    invoices: PropTypes.array.isRequired,
    regenerateInvoice: PropTypes.func.isRequired
};