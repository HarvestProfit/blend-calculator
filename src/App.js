import _ from 'lodash';
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
        <Navbar color="dark" dark>
          <NavbarBrand href="/">Blend Calculator</NavbarBrand>
        </Navbar>
        <Container className="mt-5">
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
          <TabContent activeTab={this.state.tab} className="mt-5">
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
      </Provider>
    );
  }

}

export default App;
