import React from "react";
import { reduxForm, Field } from "redux-form";
import { Form, FormGroup, Label, Input } from "reactstrap";

const renderError = ({ error, touched }) => {
  if (error && touched) {
    return <div className="alert alert-danger">{error}</div>;
  }
};

const renderInput = ({ input, label, meta }) => {
  return (
    <FormGroup>
      <Label>
        <h4>{label}</h4>
      </Label>
      <Input {...input} />
      {renderError(meta)}
    </FormGroup>
  );
};

const renderNumberInput = ({ input, label, meta }) => {
  return (
    <FormGroup>
      <Label>
        <h4>{label}</h4>
      </Label>
      <Input {...input} type="number" min="0" max="2000" />
      {meta.error && <div className="alert alert-danger">{meta.error}</div>}
    </FormGroup>
  );
};

const onSubmit = (formValues, DIPATCH, props) => {
  props.onSubmit(props.id, formValues);
};

const EditForm = (props) => {
  return (
    <React.Fragment>
      <Form onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="company" component={renderInput} label="Company" />
        <div className="row">
          <div className="col-6">
            <Field name="sale" component={renderNumberInput} label="Sale" />
          </div>
          <div className="col-6">
            <Field
              name="stockAddition"
              component={renderNumberInput}
              label="Stock Addition"
            />
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </Form>
    </React.Fragment>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.company) errors.company = "Not allowed to be empty";
  if (formValues.sale) {
    if (parseInt(formValues.sale) > parseInt(formValues.stock))
      errors.sale = "Sale can't be greater than stock";
  }
  return errors;
};

export default reduxForm({ form: "editForm", validate })(EditForm);
