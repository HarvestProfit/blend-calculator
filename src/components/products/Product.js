import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

import NumberInput from '../shared/NumberInput';

class Product extends Component {
  updateName = (event) => {
    const name = event.target.value;
    this.updateProduct({ name });
  }

  updateNitrogen = (event) => {
    const nitrogen = event.target.value;
    this.updateProduct({ nitrogen });
  }

  updatePhosphorous = (event) => {
    const phosphorous = event.target.value;
    this.updateProduct({ phosphorous });
  }

  updatePotassium = (event) => {
    const potassium = event.target.value;
    this.updateProduct({ potassium });
  }

  updateSulfur = (event) => {
    const sulfur = event.target.value;
    this.updateProduct({ sulfur });
  }

  updateProduct = (object) => {
    this.props.updateProduct({
      ...this.props.product,
      ...object,
    }, this.props.index);
  }

  removeProduct = () => {
    this.props.deleteProduct(this.props.product);
  }

  render() {
    const { product } = this.props;
    return (
      <tr>
        <td colSpan="2">
          <Input
            autoFocus
            type="text"
            value={product.name}
            onChange={this.updateName}
          />
        </td>
        <td>
          <NumberInput
            value={product.nitrogen}
            onChange={this.updateNitrogen}
          />
        </td>
        <td>
          <NumberInput
            value={product.phosphorous}
            onChange={this.updatePhosphorous}
          />
        </td>
        <td>
          <NumberInput
            value={product.potassium}
            onChange={this.updatePotassium}
          />
          </td>
        <td>
          <NumberInput
            value={product.sulfur.toString()}
            onChange={this.updateSulfur}
          />
        </td>
        <td>
          <Button color="danger" onClick={this.removeProduct}>
            <i className="fas fa-trash"></i>
          </Button>
        </td>
      </tr>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
}

export default Product;
