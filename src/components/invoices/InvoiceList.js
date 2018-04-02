import React from 'react'
import PropTypes from 'prop-types'
import {InvoiceItem} from "./InvoiceItem";
import {regenerateInvoice} from "../../actions/invoice";

export class InvoiceList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.invoiceState);

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

                }).map(invoice => <InvoiceItem invoice={invoice} regenerateInvoice={regenerateInvoice}/>)}
            </div>
        )
    }
}

InvoiceList.propTypes = {
    invoices: PropTypes.array.isRequired,
    regenerateInvoice: PropTypes.func.isRequired,
    invoiceState: PropTypes.string,
    generatedBy: PropTypes.string,
};