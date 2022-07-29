import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trunfo from './Trunfo';

const values = {
  newList: '',
  trunfo: false,
};
class List extends Component {
  constructor(props) {
    super(props);
    this.state = values;
  }

  filterList = ({ target }) => {
    this.setState({
      newList: target.value,
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { listCart, onDelete } = this.props;
    const { newList, trunfo } = this.state;
    console.log(trunfo);
    let result;
    if (newList === 'normal' || newList === 'raro'
      || newList === 'muito raro') {
      result = listCart.filter((item) => {
        const card = item.cardRare === newList;
        return card;
      });
    } else if (newList === 'todas') {
      result = listCart;
    } else if (newList.length > 0) {
      result = listCart.filter((item) => {
        const card = item.cardName;
        return card.includes(newList);
      });
    } else {
      result = listCart;
    }
    if (trunfo) {
      result = listCart.filter((item) => item.cardTrunfo !== false);
      console.log(result);
    }
    return (
      <section>
        <h4>List</h4>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ this.filterList }
          placeholder="filter"
          id="list-carta"
          disabled={ trunfo }
        />
        <label htmlFor="select">
          Select
          <select
            data-testid="rare-filter"
            onChange={ this.filterList }
            required
            id="select"
            disabled={ trunfo }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {result.map((item, index) => (
          <ul key={ index }>
            <li>{item.cardName}</li>
            <li>
              <img
                src={ item.cardImage }
                alt={ item.cardName }
              />
            </li>
            <li>{item.cardDescription}</li>
            <li>{item.cardAttr1}</li>
            <li>{item.cardAttr2}</li>
            <li>{item.cardAttr3}</li>
            <li>{item.cardRare}</li>
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => onDelete(item.ids) }
            >
              Excluir
            </button>
          </ul>
        ))}
        <Trunfo
          trunfo={ trunfo }
          onInputChange={ this.onInputChange }
        />
      </section>
    );
  }
}
List.propTypes = {
  listCart: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  /* hasTrunfo: PropTypes.bool.isRequired, */
};

export default List;
