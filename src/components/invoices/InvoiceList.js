import React from 'react'
import PropTypes from 'prop-types'
import {InvoiceItem} from "./InvoiceItem";
import {invoice} from "../../reducers/invoice";

export class InvoiceList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.invoices.map(invoice => <InvoiceItem invoice={invoice}/>)}
            </div>
        )
    }
}

InvoiceList.propTypes = {
    invoices: PropTypes.array.isRequired
};