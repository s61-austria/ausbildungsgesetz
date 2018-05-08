import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {CircularProgress} from "material-ui";
import InvoiceListFilter from "./InvoiceListFilter";
import {fetchInvoices} from "../../actions/invoice";

class InvoiceListWrapped extends React.Component{
    componentDidMount(){
        this.props.fetch()
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
    id: PropTypes.string,
    fetch: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {
        isFetching: state.invoice.isFetching,
        invoices: state.invoice.invoices,
        id: ownProps.id
    }
}

export default connect(mapStateToProps,{
    fetch: fetchInvoices
})(InvoiceListWrapped)