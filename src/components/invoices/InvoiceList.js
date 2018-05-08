import React from 'react'
import PropTypes from 'prop-types'
import InvoiceItemWrapped from "./InvoiceItemWrapped";

export class InvoiceList extends React.Component {

    render() {
        return (
            <div>
                {this.props.invoices.map(invoice => <InvoiceItemWrapped key={invoice.vehicle.uuid} invoice={invoice} />)}
            </div>
        )
    }
}

InvoiceList.propTypes = {
    invoices: PropTypes.array.isRequired,
    invoiceState: PropTypes.string,
    generatedBy: PropTypes.string,
};