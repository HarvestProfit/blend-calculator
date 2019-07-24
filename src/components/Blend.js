import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

import BlendForm from './blend/BlendForm';
import Products from './blend/Products';

class Blend extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="mb-5 text-center">Add your desired amounts (in <code>lbs</code> or <code>kg</code>)</h1>
          <BlendForm totals={this.props.totals} setTotals={this.props.setTotals} />
        </Jumbotron>
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
