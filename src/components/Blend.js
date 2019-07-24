import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BlendForm from './blend/BlendForm';
import Products from './blend/Products';

class Blend extends Component {
  render() {
    return (
      <div>
        <BlendForm totals={this.props.totals} setTotals={this.props.setTotals} />
        <Products totals={this.props.totals} products={this.props.products} />
      </div>
    )
  }
}

Blend.propTypes = {
  totals: PropTypes.object.isRequired,
  setTotals: PropTypes.func.isRequired,
}

export default Blend;
