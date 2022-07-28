import React, { Component } from 'react';
import PropTypes from 'prop-types';

const values = {
  newList: '',
};

class NameList extends Component {
  constructor(props) {
    super(props);
    this.state = values;
  }

  onClick = ({ target }) => {
    this.setState({
      newList: target.value,
    });
  }

  render() {
    const { listCart } = this.props;
    const { newList } = this.state;
    const cont = newList.length;
    const atualiza = listCart.filter((item) => {
      const card = item.cardName;
      if (cont > 0) {
        return card === newList;
      }
      return 0;
    });

    return (
      <div>
        <h4>---Filter nome:-----</h4>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ this.onClick }
          placeholder="filter"
        />
        {atualiza.map((item, index) => (
          <ul key={ index }>
            <li>{item.cardName}</li>
            <li>{item.cardImage}</li>
            <li>{item.cardDescription}</li>
            <li>{item.cardAttr1}</li>
            <li>{item.cardAttr2}</li>
            <li>{item.cardAttr3}</li>
            <li>{item.cardRare}</li>
          </ul>
        )) }
      </div>
    );
  }
}
NameList.propTypes = {
  listCart: PropTypes.func.isRequired,
};

export default NameList;
