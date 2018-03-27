import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText, RaisedButton} from 'material-ui'

export class InvoiceItem extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title={`${this.props.invoice.uuid} | Expires on: ${this.props.invoice.expires} | ${this.props.invoice.state}`}
                    actAsExpander
                    showExpandableButton/>
                <CardText expandable>
                    <p>ID: {this.props.invoice.uuid}</p>
                    <p>State: {this.props.invoice.state}</p>
                    <p>Generated on: {this.props.invoice.createdOn}</p>
                    <p>Generated: {this.props.invoice.generationType}</p>
                    <p>Expires on: {this.props.invoice.expires}</p>
                    <p>Total price: {this.props.invoice.totalPrice}</p>
                    {this.props.invoice.owner == null ? <p>No owner found!</p> :
                        <p>Owner: {this.props.invoice.owner.name}</p>}
                    {this.props.invoice.vehicle == null ? <p>No vehicle found!</p> :
                        <p>Vehicle license plate: {this.props.invoice.vehicle.licensePlate}</p>}

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
        expires: PropTypes.string,
        totalPrice: PropTypes.number,
        owner: PropTypes.shape({}),
        vehicle: PropTypes.shape({}),
    }).isRequired,
    regenerateInvoice: PropTypes.func.isRequired
};