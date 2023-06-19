import { combineReducers } from "@reduxjs/toolkit";
import { contactReduser } from "./contactSlice";
import { filterReduser } from "./filterSlice";

export const reducer = combineReducers({
    contacts: contactReduser,
    filter: filterReduser,
});