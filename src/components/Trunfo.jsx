import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trunfo extends Component {
  render() {
    const { onInputChange, trunfo } = this.props;
    return (
      <div>
        <h4>Trunfo</h4>
        <label htmlFor="label">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            id="label"
            name="trunfo"
            checked={ trunfo }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}
Trunfo.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  trunfo: PropTypes.bool.isRequired,
};
export default Trunfo;
