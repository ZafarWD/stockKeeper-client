import React from "react";
import { reduxForm, Field } from "redux-form";
import { Form, FormGroup, Label, Input } from "reactstrap";

const renderError = (meta) => {
  if (meta.touched && meta.error)
    return <div className="alert alert-danger">{meta.error}</div>;
};

const renderSelect = ({ input, label, optionList, meta }) => {
  return (
    <FormGroup>
      <Label>
        <h4>{label}</h4>
      </Label>
      <Input {...input} type="select">
        {optionList.map((m, i) => (
          <option key={i}>{m}</option>
        ))}
      </Input>
      {renderError(meta)}
    </FormGroup>
  );
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
      <Input {...input} type="number" max="2000" min="0" />
      {renderError(meta)}
    </FormGroup>
  );
};

const onSubmit = (formValues, DISPATCH, props) => {
  props.onSubmit(formValues);
};

const CreateForm = (props) => {
  return (
    <div className="container mt-5">
      <Form onSubmit={props.handleSubmit(onSubmit)}>
        <Field
          optionList={props.measurements}
          name="measurement"
          component={renderSelect}
          label="Measurement"
        />
        <Field
          name="mm"
          component={renderSelect}
          label="mm"
          optionList={props.mmsArray}
        />
        <Field name="company" component={renderInput} label="Company" />
        <Field name="stock" component={renderNumberInput} label="Stock" />
        <button className="btn btn-primary btn-lg">Submit</button>
      </Form>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  const message = `Not allowed to be empty`;

  if (!formValues.mm) errors.mm = message;
  if (!formValues.measurement) errors.measurement = message;
  if (!formValues.stock) errors.stock = message;
  if (!formValues.company) errors.company = message;
  return errors;
};

export default reduxForm({ form: "createForm", validate })(CreateForm);
