import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Product extends Component {
  updateName = (event) => {
    const name = event.target.value;
    this.updateProduct({ name });
  }

  updateNitrogen = (event) => {
    const nitrogen = _.toNumber(event.target.value);
    this.updateProduct({ nitrogen });
  }

  updatePhosphorous = (event) => {
    const phosphorous = _.toNumber(event.target.value);
    this.updateProduct({ phosphorous });
  }

  updatePotassium = (event) => {
    const potassium = _.toNumber(event.target.value);
    this.updateProduct({ potassium });
  }

  updateSulfur = (event) => {
    const sulfur = _.toNumber(event.target.value);
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
          <Input value={product.name} onChange={this.updateName} />
        </td>
        <td>
          <Input value={product.nitrogen.toString()} onChange={this.updateNitrogen} />
        </td>
        <td>
          <Input value={product.phosphorous.toString()} onChange={this.updatePhosphorous} />
        </td>
        <td>
          <Input value={product.potassium.toString()} onChange={this.updatePotassium} />
          </td>
        <td>
          <Input value={product.sulfur.toString()} onChange={this.updateSulfur} />
        </td>
        <td>
          <Button color="danger" onClick={this.removeProduct}>
            🗑
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
