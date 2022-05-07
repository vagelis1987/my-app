import { combineReducers } from "redux";
import { productReducer , selectedProductsReducer} from "./productReducer";
import { universityReducer } from "./universityReducer";


const reducers = combineReducers({
  allProducts:productReducer,
  product:selectedProductsReducer,
  allUniversities:universityReducer,
});

export default reducers