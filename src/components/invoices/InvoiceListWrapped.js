import React from 'react'
import PropTypes from 'prop-types'
import {InvoiceList} from "./InvoiceList";
import {connect} from "react-redux";
import {fetchInvoices} from "../../actions/invoice";
import { withStyles } from 'material-ui/styles';
import {Card, CardHeader, CardText, DatePicker, Divider, Paper} from "material-ui";
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import CloseExpandIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import areIntlLocalesSupported from 'intl-locales-supported';
import '../../index.css';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['nl', 'nl-NL'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/nl');
    require('intl/locale-data/jsonp/nl-NL');
}

export class InvoiceListWrapped extends React.Component {
    componentDidMount(){
        this.props.fetchInvoices();
    }

    render() {
        return (
            <div>
                <Card className="cardListItem">
                    <CardHeader actAsExpander showExpandableButton closeIcon={<FilterIcon/>} openIcon={<CloseExpandIcon/>} title={'FILTER'} />
                    <Divider />
                    <CardText expandable>
                        <h4>CREATE DATE</h4>
                        <div className="flexWrapCard">
                            <DatePicker
                                className="datePicker"
                                floatingLabelText="Start"
                                okLabel="OK"
                                cancelLabel="Annuleren"
                                locale="nl"
                            />
                            <DatePicker
                                className="datePicker"
                                floatingLabelText="End"
                                okLabel="OK"
                                cancelLabel="Annuleren"
                                locale="nl"
                            />
                            <Divider light />
                        </div>
                    </CardText>
                </Card>

                {this.props.isFetching ? <p>LOADING...</p>: <p></p>}
                {this.props.isFailed ? <p>FAILED!!!!!!</p> : <p></p>}
                <InvoiceList invoices={this.props.invoices}/>
            </div>
        )
    }
}

InvoiceListWrapped.propTypes = {
    isFetching: PropTypes.bool,
    invoices: PropTypes.array,
    isFailed: PropTypes.bool,
    fetchInvoices: PropTypes.func
};

function mapStateToProps(state) {
    return {
        isFetching: state.invoice.isFetching,
        isFailed: state.invoice.isFailed,
        invoices: state.invoice.invoices,
    }
}


export default connect(mapStateToProps, {
    fetchInvoices: fetchInvoices
})(InvoiceListWrapped)