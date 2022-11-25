import { combineReducers } from 'redux';
import { productReducer, selectedProductsReducer } from './productReducer';
import { universityReducer } from './universityReducer';
import { byCompanyReducer } from './byCompanyReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
  allUniversities: universityReducer,
  allbyCompany: byCompanyReducer,
});

export default reducers;
