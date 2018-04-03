import React from 'react'
import PropTypes from 'prop-types'
import {InvoiceItem} from "./InvoiceItem";

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

                }).map(invoice => <InvoiceItem key={invoice.uuid} invoice={invoice} regenerateInvoice={this.props.regenerateInvoice} changeInvoiceState={this.props.changeInvoiceState}/>)}
            </div>
        )
    }
}

InvoiceList.propTypes = {
    invoices: PropTypes.array.isRequired,
    regenerateInvoice: PropTypes.func.isRequired,
    changeInvoiceState: PropTypes.func.isRequired,
    invoiceState: PropTypes.string,
    generatedBy: PropTypes.string,
};