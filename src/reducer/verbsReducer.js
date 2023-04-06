import { useState, useReducer } from 'react';
import { data as simplePresent } from "../data/verbsConjugationSimplePresent-data.js";
import { data as simpleFuture } from "../data/verbsConjugationSimpleFuture-data.js";
import { SET_LIST } from "../actions/verbsDataActions.js";


export const verbsReducer = (state, action) => {
    // const [verbData, setverbaData] = useState(simplePresent);
    console.log(action.payload);

};


