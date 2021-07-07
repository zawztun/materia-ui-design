import {ActionTypes} from '../constants/action-types'

export const setProducts = (product) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload:product
    }
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
};