import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Blend from '../components/Blend';

import { calculateTotals, setTotals } from '../actions/totals';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    calculateTotals,
    setTotals,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    products: state.products,
    totals: state.totals,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blend);
