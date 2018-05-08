import React from 'react'
import PropTypes from 'prop-types'
import {InvoiceItem} from "./InvoiceItem";
import InvoiceItemWrapped from "./InvoiceItemWrapped";

export class InvoiceList extends React.Component {

    render() {
        return (
            <div>
                {this.props.invoices.filter(invoice => {
                    if(this.props.invoiceState === "ALL"){
                        return invoice
                    } else{
                        return invoice.state === this.props.invoiceState
                    }

                }).filter(invoice => {
                    if(this.props.generatedBy === "ALL"){
                        return invoice
                    } else {
                        return invoice.generationType === this.props.generatedBy
                    }

                }).map(invoice => <InvoiceItemWrapped key={invoice.uuid} invoice={invoice} />)}
            </div>
        )
    }
}

InvoiceList.propTypes = {
    invoices: PropTypes.array.isRequired,
    invoiceState: PropTypes.string,
    generatedBy: PropTypes.string,
};