import React from 'react'
import PropTypes from 'prop-types'
import {
    Card,
    CardHeader,
    CardText,
    DatePicker,
    Divider,
    MenuItem,
    RaisedButton,
    SelectField,
    TextField
} from 'material-ui'

let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
let states = ['OPEN', 'PAID', 'CLOSED', 'LATE', 'ENDING'];

const style = {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
};

export class InvoiceItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stateValue: 1,
        };

        this.handleInvoiceStateChange = this.handleInvoiceStateChange.bind(this);
        this.state.stateValue = states.indexOf(this.props.invoice.state) + 1
    }

    handleInvoiceStateChange(event, index, value){
        this.setState({stateValue: value});
    }

    render() {

        let createdOn = new Date(this.props.invoice.createdOn);
        let expires = new Date(this.props.invoice.expires);
        let createdFor = new Date(this.props.invoice.createdFor);

        return(
            <Card className="cardListItem">
                <CardHeader
                    title={`ID: ${this.props.invoice.uuid} | STATE: ${this.props.invoice.state}`}
                    actAsExpander
                    showExpandableButton/>
                <CardText expandable>
                    <table width="100%">
                        <tr>
                            <th width="25%" align="left"><h3>GENERAL INFORMATION</h3></th>
                            <th width="25%"></th>
                            <th width="25%" align="left"><h3>EXTRA</h3></th>
                            <th width="25%"></th>
                        </tr>
                        <tbody>
                        <tr>
                            <td>
                                <TextField
                                    disabled={true}
                                    value={this.props.invoice.uuid}
                                    floatingLabelText="Invoice ID"
                                />
                            </td>
                            <td>
                                <TextField
                                    disabled={true}
                                    value={this.props.invoice.generationType}
                                    floatingLabelText="Invoice created by"
                                />
                            </td>
                            <td>
                                <TextField
                                    disabled={true}
                                    value={this.props.invoice.profile == null ? 'No owner found!' : `${this.props.invoice.profile.kontoUser.userName}`}
                                    floatingLabelText="Owner name"
                                />
                            </td>
                            <td>
                                <TextField
                                    disabled={true}
                                    value={this.props.invoice.meters}
                                    floatingLabelText="Driven meters"
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <SelectField
                                    floatingLabelText="Invoice state"
                                    value={this.state.stateValue}
                                    onChange={this.handleInvoiceStateChange}>
                                    <MenuItem value={1} primaryText="OPEN" />
                                    <MenuItem value={2} primaryText="PAID" />
                                    <MenuItem value={3} primaryText="CLOSED" />
                                    <MenuItem value={4} primaryText="LATE" />
                                    <MenuItem value={5} primaryText="ENDING" />
                                </SelectField>
                            </td>
                            <td>
                                <TextField
                                    disabled={true}
                                    value={months[createdFor.getMonth() - 1] + ' ' + createdFor.getFullYear()}
                                    floatingLabelText="Invoice for"
                                />
                            </td>
                            <td>
                                <TextField
                                    disabled={true}
                                    value={this.props.invoice.vehicle == null ? 'No vehicle found!' : `${this.props.invoice.vehicle.licensePlate}`}
                                    floatingLabelText="Vehicle license plate"
                                />
                            </td>
                            <td></td>
                        </tr>

                        <tr>
                            <th align="left" valign="bottom"><h4>CREATED ON:</h4></th>
                            <td><DatePicker disabled value={createdOn}/></td>
                        </tr>

                        <tr>
                            <th align="left" valign="bottom"><h4>EXPIRES ON:</h4></th>
                            <td><DatePicker disabled value={expires}/></td>
                            <td></td>
                            <td align="right" valign="bottom">
                                <h4>TOTAL PRICE: {this.props.invoice.totalPrice}</h4>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <br/>

                    <Divider />
                    <table width="100%">
                        <tbody>
                        <td width="50%" align="left">
                            <RaisedButton
                                label="Save Changes"
                                onClick={() => this.props.changeInvoiceState(this.props.invoice, states[this.state.stateValue - 1])}
                                style={style}
                                primary
                            />

                            <RaisedButton
                                disabled={this.props.invoice.state === 'PAID'}
                                onClick={() => this.props.regenerateInvoice(this.props.invoice)}
                                label="Regenerate"
                                style={style}
                                primary
                            />
                        </td>
                        <td width="50%" align="right">
                            <RaisedButton
                                disabled={this.props.invoice.state === 'PAID'}
                                onClick={() => this.props.payInvoice(this.props.invoice)}
                                label="Pay invoice"
                                style={style}
                                primary
                            />
                        </td>
                        </tbody>
                    </table>
                </CardText>
            </Card>
        )
    }
}

InvoiceItem.propTypes = {
    invoice: PropTypes.shape({
        uuid: PropTypes.string,
        state: PropTypes.string,
        generationType: PropTypes.string,
        createdOn: PropTypes.number,
        createdFor: PropTypes.number,
        expires: PropTypes.number,
        totalPrice: PropTypes.number,
        meters: PropTypes.number,
        payLink: PropTypes.string,
        payTime: PropTypes.number,
        paymentId: PropTypes.string,
        profile: PropTypes.shape({}),
        vehicle: PropTypes.shape({}),
    }).isRequired,
    regenerateInvoice: PropTypes.func.isRequired,
    changeInvoiceState: PropTypes.func.isRequired,
    payInvoice: PropTypes.func.isRequired,
};