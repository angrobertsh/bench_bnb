import React from 'react';
import * as ACTIONS from "../actions/bench_actions.js";
import { fetchBenches } from "../util/bench_api_util";


let success;

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case "REQUEST_BENCHES":
      success = data => dispatch(ACTIONS.receiveBenches(data));
      fetchBenches(success);
      return next(action);
    default:
      return next(action);
  }
}



export default BenchesMiddleware
