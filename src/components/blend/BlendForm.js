import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Col, Form, FormGroup, Label } from 'reactstrap';

import NumberInput from '../shared/NumberInput';

class BlendForm extends Component {
  updateNitrogen = (event) => {
    const nitrogen = event.target.value;
    this.updateTotals({ nitrogen });
  }

  updatePhosphorous = (event) => {
    const phosphorous = event.target.value;
    this.updateTotals({ phosphorous });
  }

  updatePotassium = (event) => {
    const potassium = event.target.value;
    this.updateTotals({ potassium });
  }

  updateSulfur = (event) => {
    const sulfur = event.target.value;
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
          <Label className="text-right" for="nitrogen" sm={6}>Nitogen</Label>
          <Col sm={2} className="mr-auto">
            <NumberInput name="nitrogen" id="nitrogen" value={totals.nitrogen} onChange={this.updateNitrogen} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="text-right" for="phosphorous" sm={6}>Phosphorous</Label>
          <Col sm={2} className="mr-auto">
            <NumberInput name="phosphorous" id="phosphorous" value={totals.phosphorous} onChange={this.updatePhosphorous} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="text-right" for="potassium" sm={6}>Potassium</Label>
          <Col sm={2} className="mr-auto">
            <NumberInput name="potassium" id="potassium" value={totals.potassium} onChange={this.updatePotassium} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="text-right" for="sulfur" sm={6}>Sulfur</Label>
          <Col sm={2} className="mr-auto">
            <NumberInput name="sulfur" id="sulfur" value={totals.sulfur} onChange={this.updateSulfur} />
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
