import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText, RaisedButton} from 'material-ui'

export class InvoiceItem extends React.Component {
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
                    <table>
                        <tbody>
                        <tr>
                            <th align="left" width="100">ID:</th>
                            <td>{this.props.invoice.uuid}</td>
                        </tr>
                        <tr>
                            <th align="left">State:</th>
                            <td>{this.props.invoice.state}</td>
                        </tr>
                        <tr height="20px"></tr>
                        <tr>
                            <th align="left">Created on:</th>
                            <td>{createdOn.getHours()}:{createdOn.getMinutes()}:{createdOn.getSeconds()} - {createdOn.getDay()}/{createdOn.getMonth()}/{createdOn.getFullYear()}</td>
                        </tr>
                        <tr>
                            <th align="left">Expires on:</th>
                            <td>{expires.getHours()}:{expires.getMinutes()}:{expires.getSeconds()} - {expires.getDay()}/{expires.getMonth()}/{expires.getFullYear()}</td>
                        </tr>
                        <tr>
                            <th align="left">Created by:</th>
                            <td>{this.props.invoice.generationType}</td>
                        </tr>
                        <tr>
                            <th align="left">Month/Year</th>
                            <td>{createdFor.getMonth()}/{createdFor.getFullYear()}</td>
                        </tr>
                        <tr height="20px"></tr>
                        <tr>
                            <th align="left">Owner:</th>
                            <td>{this.props.invoice.profile == null ? 'No owner found!' : `${this.props.invoice.profile.kontoUser.userName}`}</td>
                        </tr>
                        <tr>
                            <th align="left">Vehicle:</th>
                            <td>{this.props.invoice.vehicle == null ? 'No vehicle found!' : `${this.props.invoice.vehicle.licensePlate}`}</td>
                        </tr>
                        <tr>
                            <th align="left">Meters:</th>
                            <td>{this.props.invoice.meters}</td>
                        </tr>
                        <tr height="20px"></tr>
                        <tr>
                            <th align="left">Total price:</th>
                            <td>{this.props.invoice.totalPrice}</td>
                        </tr>
                        </tbody>
                    </table>

                    <br/>
                    <br/>

                    <RaisedButton
                        onClick={() => this.props.regenerateInvoice(this.props.invoice)}
                        label="Regenerate"
                        primary
                    />
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
        createdOn: PropTypes.string,
        createdFor: PropTypes.string,
        expires: PropTypes.string,
        totalPrice: PropTypes.number,
        meters: PropTypes.number,
        profile: PropTypes.shape({}),
        vehicle: PropTypes.shape({}),
    }).isRequired,
    regenerateInvoice: PropTypes.func.isRequired
};