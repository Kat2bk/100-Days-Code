import {combineReducers} from "redux";
import filterReducer from "./filterReducer";
import expenseReducer from "./expenseReducer";

export default combineReducers({
    filters: filterReducer,
    expenses: expenseReducer
});