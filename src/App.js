import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';

import Blend from './containers/Blend';
import Products from './containers/Products';

import store from './store';

import whiteLogo from './assets/logo-white-100.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    }
  }

  openProducts = () => {
    this.setState({ tab: 0 });
  }

  openResults = () => {
    this.setState({ tab: 1 });
  }

  render() {
    const activeTab = this.state.tab === 0;
    return (
      <Provider store={store}>
        <header>
          <Navbar color="dark" dark>
            <NavbarBrand href="https://www.harvestprofit.com">
              <img className="img-fluid" alt="Harvest Profit" src={whiteLogo} height="30" width="30" />
            </NavbarBrand>
            <NavbarBrand href="/">
              Blend Calculator
            </NavbarBrand>
          </Navbar>
        </header>
        <Container className="my-5">
          <Nav tabs fill>
            <NavItem>
              <NavLink className={activeTab ? 'active' : undefined} onClick={this.openProducts}>
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab ? undefined : 'active'} onClick={this.openResults}>
                Blend
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.tab} className="my-5">
            <TabPane tabId={0}>
              <Row>
                <Col>
                  <Products />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId={1}>
              <Row>
                <Col>
                  <Blend />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
        <footer>
          <Navbar color="light" light>
            <span>
              Made with <i className="fas fa-heart" /> by Harvest Profit
            </span>
            <NavbarBrand href="https://github.com/HarvestProfit/blend-calculator">
              Source Code
            </NavbarBrand>
          </Navbar>
        </footer>
      </Provider>
    );
  }

}

export default App;
