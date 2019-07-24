import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';

class BlendForm extends Component {
  updateNitrogen = (event) => {
    const nitrogen = _.toNumber(event.target.value);
    this.updateTotals({ nitrogen });
  }

  updatePhosphorous = (event) => {
    const phosphorous = _.toNumber(event.target.value);
    this.updateTotals({ phosphorous });
  }

  updatePotassium = (event) => {
    const potassium = _.toNumber(event.target.value);
    this.updateTotals({ potassium });
  }

  updateSulfur = (event) => {
    const sulfur = _.toNumber(event.target.value);
    this.updateTotals({ sulfur });
  }

  updateTotals = (object) => {
    this.props.setTotals({
      ...this.props.totals,
      ...object,
    });
  }

  render() {
    const { totals } = this.props;
    return (
      <Form>
        <FormGroup row>
          <Label for="nitrogen" sm={2}>Nitogen</Label>
          <Col sm={10}>
            <Input type="number" name="nitrogen" id="nitrogen" value={totals.nitrogen} onChange={this.updateNitrogen} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phosphorous" sm={2}>Phosphorous</Label>
          <Col sm={10}>
            <Input type="number" name="phosphorous" id="phosphorous" value={totals.phosphorous} onChange={this.updatePhosphorous} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="potassium" sm={2}>Potassium</Label>
          <Col sm={10}>
            <Input type="number" name="potassium" id="potassium" value={totals.potassium} onChange={this.updatePotassium} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="sulfur" sm={2}>Sulfur</Label>
          <Col sm={10}>
            <Input type="number" name="sulfur" id="sulfur" value={totals.sulfur} onChange={this.updateSulfur} />
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

BlendForm.propTypes = {
  totals: PropTypes.object.isRequired,
  setTotals: PropTypes.func.isRequired,
}

export default BlendForm;
