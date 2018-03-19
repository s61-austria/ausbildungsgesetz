import React from 'react'
import {Field, propTypes, reduxForm} from "redux-form";
import {TextField} from 'redux-form-material-ui'
import {RaisedButton} from "material-ui";

export const RateForm = (props) => (
    <div>
        <form onSubmit={props.handleSubmit}>
            <Field
                name="id"
                component={TextField}
                type="text"
                floatingLabelText="ID"/>
            <Field
                name="vehicleType"
                component={TextField}
                type="text"
                hintText="PKW"
                floatingLabelText="Vehicle Type"/>
            <Field
                name="kmPrice"
                component={TextField}
                type="text"
                hintText="0.22"
                floatingLabelText="Kilometer price"/>
            <Field
                name="vignetteType"
                component={TextField}
                type="text"
                hintText="ONE_YEAR"
                floatingLabelText="Vignette Type"/>
            <RaisedButton
                primary
                type="submit"
                label="Submit"/>
        </form>
    </div>
);

RateForm.propTypes = propTypes;

export default reduxForm({
    form: 'rateform'
})(RateForm)