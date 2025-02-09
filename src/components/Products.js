import PropTypes from 'prop-types';
import React from 'react';
import { Button, Jumbotron, Table } from 'reactstrap';

import Product from './products/Product';

const Products = ({ createProduct, updateProduct, deleteProduct, products }) => {
  if (products.length === 0) {
    return (
      <Jumbotron className="vh-50 text-center">
        <h1>You haven't added any products for your blend yet</h1>
        <Button className="mt-3" size="lg" color="primary" onClick={createProduct}>Add Product</Button>
      </Jumbotron>
    )
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th colSpan="2">Name</th>
          <th colSpan="1">Nitrogen (%)</th>
          <th colSpan="1">Phosphorous (%)</th>
          <th colSpan="1">Potassium (%)</th>
          <th colSpan="1">Sulfur (%)</th>
          <th colSpan="1" />
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <Product key={index} index={index} product={product} updateProduct={updateProduct} deleteProduct={deleteProduct} />
        ))}
        <tr>
          <td colSpan="7">
            <Button block color="primary" onClick={createProduct}>Add Product</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  createProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
}

export default Products;
