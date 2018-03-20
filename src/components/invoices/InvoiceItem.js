import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText} from 'material-ui'

export class InvoiceItem extends React.Component {
    render() {
        return(
            <Card>
                <CardHeader
                    title={`${this.props.invoice.expires} | ${this.props.invoice.state}`}
                    actAsExpander
                    showExpandableButton />
                <CardText expandable >
                    <p>Id: {this.props.invoice.id}</p>
                    <p>State: {this.props.invoice.state}</p>
                    <p>Generated on: {this.props.invoice.createdOn}</p>
                    <p>Generated: {this.props.invoice.generationType}</p>
                    <p>Expires on: {this.props.invoice.expires}</p>
                    <p>Total price: {this.props.invoice.totalPrice}</p>
                    {this.props.invoice.owner == null ? <p>No owner found!</p> :
                        <p>Owner: {this.props.invoice.owner.name}</p>}
                    {this.props.invoice.vehicle == null ? <p>No vehicle found!</p> :
                        <p>Vehicle license plate: {this.props.invoice.vehicle.licensePlate}</p>}
                </CardText>
            </Card>
        )
    }
}

InvoiceItem.propTypes = {
    invoice: PropTypes.shape({
        id: PropTypes.string,
        state: PropTypes.string,
        generationType: PropTypes.string,
        createdOn: PropTypes.string,
        expires: PropTypes.string,
        totalPrice: PropTypes.number,
        owner: PropTypes.shape({}),
        vehicle: PropTypes.shape({}),
    }).isRequired
};