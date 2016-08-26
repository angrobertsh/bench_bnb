import React from 'react';
import BenchIndexContainer from './bench_index_container';
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <BenchIndexContainer />
    </Provider>
  )};

export default Root;
