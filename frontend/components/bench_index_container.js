import BenchIndex from './bench_index';
import * as ACTIONS from '../actions/bench_actions';
import { connect } from 'react-redux';

// const mapStateToProps = function(state){
//   return {benches: state.benches};
// }

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(ACTIONS.requestBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
