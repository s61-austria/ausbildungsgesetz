import React from 'react'
import {Field, propTypes, reduxForm} from "redux-form";
import {TextField} from 'redux-form-material-ui'
import {RaisedButton} from "material-ui";

export const RateForm = (props) => (
    <div>
        <form onSubmit={props.handleSubmit}>
            <Field
                name="vehicleType"
                component={TextField}
                type="text" />
            <Field
                name="kmPrice"
                component={TextField}
                type="text" />
            <Field
                name="vignetteType"
                component={TextField}
                type="text" />
            <RaisedButton
                primary
                type="submit"
                label="Submit" />
        </form>
    </div>
);

RateForm.propTypes = propTypes;

export default reduxForm({
    form: 'rateform'
})(RateForm)