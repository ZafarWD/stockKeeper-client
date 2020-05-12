import _ from 'lodash';

export default (formValues) => {
    if (!formValues.sale)
        formValues.stock = parseInt(formValues.stock) + 0;
    else formValues.stock = parseInt(formValues.stock) - parseInt(formValues.sale);
    if (!formValues.stockAddition)
        formValues.stock = parseInt(formValues.stock) + 0;
    else formValues.stock = parseInt(formValues.stock) + parseInt(formValues.stockAddition);
    formValues.stock = formValues.stock.toString();
    const updatedForm = _.omit(formValues, ["sale", "stockAddition"]);
    return updatedForm;
};