import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {changeInvoiceState, regenerateInvoice} from "../../actions/invoice";
import {InvoiceItem} from "./InvoiceItem";

class InvoiceItemWrapped extends React.Component {
    render() {
        return (<InvoiceItem invoice={this.props.invoice} regenerateInvoice={this.props.regenerateInvoice}
                             changeInvoiceState={this.props.changeInvoiceState}/>)
    }
}

InvoiceItemWrapped.propTypes = {
    invoice: PropTypes.shape({}).isRequired,
    regenerateInvoice: PropTypes.func,
    changeInvoiceState: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {
        invoice: ownProps.invoice
    }
}

export default connect(mapStateToProps, {
    regenerateInvoice: regenerateInvoice,
    changeInvoiceState: changeInvoiceState
})(InvoiceItemWrapped)