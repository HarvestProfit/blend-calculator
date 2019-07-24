import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      totals: {
        nitrogen: 0.00,
        phosphorous: 0.00,
        potassium: 0.00,
        sulfur: 0.00,
      },
    };
  }

  componentDidMount() {
    this.processProducts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.totals !== prevProps.totals) {
      this.processProducts();
    }
  }

  processProducts = () => {
    this.calculateSulphur();
    this.calculatePotassium();
    this.calculatePhosphorous();
    this.calculateNitrogen();
  }

  calculateNitrogen = () => {
    const nitrogenProducts = this.props.products.filter(p => p.nitrogen > 0 && p.phosphorous === 0 && p.sulfur === 0 && p.potassium === 0);
    if (nitrogenProducts.length === 0) {
      return;
    }
    const sortedProducts = _.reverse(_.sortBy(nitrogenProducts, 'nitrogen'));
    const product = sortedProducts[0];
    this.addProductToState(product);
  }

  calculatePhosphorous = () => {
    const phosphorousProducts = this.props.products.filter(p => p.phosphorous > 0 && p.sulfur === 0 && p.potassium === 0);
    if (phosphorousProducts.length === 0) {
      return;
    }
    const sortedProducts = _.reverse(_.sortBy(phosphorousProducts, 'phosphorous'));
    const product = sortedProducts[0];
    this.addProductToState(product);
  }

  calculatePotassium = () => {
    const potassiumProducts = this.props.products.filter(p => p.potassium > 0 && p.sulfur === 0);
    if (potassiumProducts.length === 0) {
      return;
    }
    const sortedProducts = _.reverse(_.sortBy(potassiumProducts, 'potassium'));
    const product = sortedProducts[0];
    this.addProductToState(product);
  }

  calculateSulphur = () => {
    const sulfurProducts = this.props.products.filter(p => p.sulfur > 0);
    if (sulfurProducts.length === 0) {
      return;
    }
    const sortedProducts = _.reverse(_.sortBy(sulfurProducts, 'sulfur'));
    const product = sortedProducts[0];
    this.addProductToState(product);
  }

  addProductToState = (pendingProduct) => {
    // totals to add
    const totalNitrogen = this.props.totals.nitrogen - this.state.totals.nitrogen;
    const totalPhosphorous = this.props.totals.phosphorous - this.state.totals.phosphorous;
    const totalPotassium = this.props.totals.potassium - this.state.totals.potassium;
    const totalSulfur = this.props.totals.sulfur - this.state.totals.sulfur;


    // amount for product
    const nitrogen = pendingProduct.nitrogen > 0 ? totalNitrogen / (pendingProduct.nitrogen / 100) : 0;
    const phosphorous = pendingProduct.phosphorous > 0 ? totalPhosphorous / (pendingProduct.phosphorous / 100) : 0;
    const potassium = pendingProduct.potassium > 0 ? totalPotassium / (pendingProduct.potassium / 100) : 0;
    const sulfur = pendingProduct.sulfur > 0 ? totalSulfur / (pendingProduct.sulfur / 100) : 0
    const product = {
      ...pendingProduct,
      nitrogen,
      phosphorous,
      potassium,
      sulfur,
    }
    console.log(product);
    this.addNitrogenToStateTotals(nitrogen);
    this.addPhosphorousToStateTotals(phosphorous);
    this.addPotassiumToStateTotals(potassium);
    this.addSulfurToStateTotals(sulfur);
    this.updateOrAddProduct(product);
  }

  addNitrogenToStateTotals = (nitrogenToAdd) => {
    const nitrogen = this.state.totals.nitrogen + nitrogenToAdd;
    this.setState({ nitrogen });
  }

  addPhosphorousToStateTotals = (phosphorousToAdd) => {
    const phosphorous = this.state.totals.phosphorous + phosphorousToAdd;
    this.setState({ phosphorous });
  }

  addPotassiumToStateTotals = (potassiumToAdd) => {
    const potassium = this.state.totals.potassium + potassiumToAdd;
    this.setState({ potassium });
  }

  addSulfurToStateTotals = (sulfurToAdd) => {
    const sulfur = this.state.totals.sulfur + sulfurToAdd;
    this.setState({ sulfur });
  }

  updateOrAddProduct = (product) => {
    const index = this.state.products.findIndex(p => p.id === product.id);
    console.log(index);
    if (index !== -1) {
      this.setState({
        products: [
          ...this.state.products.slice(0, index),
          product,
          ...this.state.products.slice(index + 1),
        ],
      });
    } else {
      this.setState({
        products: [
          ...this.state.products,
          product,
        ],
      });
    }
  }

  render() {
    return (
      <Table className="mt-5">
        <tbody>
          {this.state.products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.nitrogen}</td>
              <td>{product.phosphorous}</td>
              <td>{product.potassium}</td>
              <td>{product.sulfur}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  totals: PropTypes.object.isRequired,
}

export default Products;
