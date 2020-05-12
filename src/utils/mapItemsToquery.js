export default (array, query, attribute) => {
    let refinedArray = [];
    if (!array.length) return array;
    else {
        if (!query) return array;
        else {
            refinedArray = array.filter((p) => p[attribute] === query);
            return refinedArray;
        }
    }
};