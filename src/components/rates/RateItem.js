import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText} from 'material-ui'

export class RateItem extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.rate.vignetteType}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true} >
                    <p>Id: {this.props.rate.uuid}</p>
                    <p>VehicleType: {this.props.rate.vehicleType}</p>
                    <p>VignetteType: {this.props.rate.vignetteType}</p>
                    <p>kmPrice: {this.props.rate.kmPrice}</p>
                </CardText>
            </Card>
        )
    }
}

RateItem.propTypes = {
    rate: PropTypes.shape({
        vehicleType: PropTypes.string,
        vignetteType: PropTypes.string,
        kmPrice: PropTypes.number,
        uuid: PropTypes.string
    }).isRequired
};