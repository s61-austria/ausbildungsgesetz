import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

export default (props) => (
    <Paper zDepth={2}>
        <TextField
            defaultValue={this.props.rate.vehicleType}
            floatingLabelText="Vehicle type"
        />
        <Divider />
        <TextField
            defaultValue={this.props.rate.kmPrice}
            floatingLabelText="Kilometer price"
        />
        <Divider />
        <TextField
            defaultValue={this.props.rate.vignetteType}
            floatingLabelText="Vignette type"
        />
        <Divider />
        <RaisedButton label="Update" primary={true} />
        <Divider />
    </Paper>
)

this.propTypes = {
    rate: PropTypes.shape({
        id: PropTypes.string(),
        vehicleType: PropTypes.string(),
        kmPrice: PropTypes.number(),
        vignetteType: PropTypes.string()
    })
}

