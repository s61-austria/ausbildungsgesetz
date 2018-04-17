import React from 'react'
import PropTypes from 'prop-types'
import {
    Card,
    CardHeader,
    CardText,
    RaisedButton,
    TextField
} from 'material-ui'

const style = {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
};

export class RateItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            kmPrice: 0
        };

        this.handleKmPriceChange = this.handleKmPriceChange.bind(this);
        this.state.kmPrice = this.props.rate.kmPrice;
    }

    handleKmPriceChange(event, value){
        this.setState({kmPrice: value});
    }

    render() {
        return (
            <Card className="cardListItem">
                <CardHeader
                    title={this.props.rate.vehicleType + " - " + this.props.rate.vignetteType}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true} >
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td width="20%">
                                    <TextField
                                        disabled={true}
                                        value={this.props.rate.uuid}
                                        floatingLabelText="Rate ID"
                                    />
                                </td>
                                <td width="20%">
                                    <TextField
                                        disabled={true}
                                        value={this.props.rate.vehicleType}
                                        floatingLabelText="Vehicle type"
                                    />
                                </td>
                                <td width="20%">
                                    <TextField
                                        disabled={true}
                                        value={this.props.rate.vignetteType}
                                        floatingLabelText="Vignette type"
                                    />
                                </td>
                                <td width="20%">
                                    <TextField
                                        defaultValue={this.props.rate.kmPrice}
                                        floatingLabelText="KM Price"
                                        onChange={this.handleKmPriceChange}
                                        type="number"
                                    />
                                </td>
                                <td width="20%">
                                    <RaisedButton
                                        label="Save Changes"
                                        onClick={() => this.props.updateRate(this.props.rate, this.state.kmPrice)}
                                        style={style}
                                        primary
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
    }).isRequired,
    updateRate: PropTypes.func.isRequired
};