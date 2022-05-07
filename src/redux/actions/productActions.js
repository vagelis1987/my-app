import {ActionTypes} from '../contants/action-types'

export const setProcucts = (products) =>{
  return{
    type:ActionTypes.SET_PRODUCTS,
    payload:products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};