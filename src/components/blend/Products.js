import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Products extends Component {

  render() {
    const originalProducts = this.props.products;
    const products = originalProducts.map((p) => {
      const product = this.props.product_totals.find(productTotal => p.id === productTotal.id);
      if (!product) {
        return null;
      }
      return (
        <tr key={product.id}>
          <td colSpan="2">{product.name}</td>
          <td colSpan="1">{product.amount.toFixed(2)}</td>
          <td colSpan="1">{product.nitrogen.toFixed(2)}</td>
          <td colSpan="1">{product.phosphorous.toFixed(2)}</td>
          <td colSpan="1">{product.potassium.toFixed(2)}</td>
          <td colSpan="1">{product.sulfur.toFixed(2)}</td>
        </tr>
      )
    });

    return (
      <Table className="mt-5">
        <thead>
          <tr>
            <th colSpan="2">Name</th>
            <th colSpan="1">Amount (units)</th>
            <th colSpan="1">Nitrogen (units)</th>
            <th colSpan="1">Phosphorous (units)</th>
            <th colSpan="1">Potassium (units)</th>
            <th colSpan="1">Sulfur (units)</th>
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </Table>
    )
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  product_totals: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Products;
