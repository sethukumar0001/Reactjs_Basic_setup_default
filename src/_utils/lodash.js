import _ from "lodash";

export const setValue = (object,path,value) => {
    return _.set(object, path, value);
};

export const getValue = (object,path,defaultValue) => {
    return _.get(object, path,defaultValue);
};

export const isEmpty = (object) => {
    return _.isEmpty(object);
};

export const groupBy = (array, identity) => {
    return _.groupBy(array, identity);
}