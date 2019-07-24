import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Products from '../components/Products';

import {
  createProduct,
  updateProduct,
  deleteProduct,
} from '../actions/products';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createProduct,
    updateProduct,
    deleteProduct,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
