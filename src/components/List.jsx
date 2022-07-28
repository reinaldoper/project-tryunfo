import React, { Component } from 'react';
import PropTypes from 'prop-types';

const values = {
  newList: '',
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

  render() {
    const { listCart, onDelete } = this.props;
    const { newList } = this.state;
    let result;
    if (newList.length > 0) {
      result = listCart.filter((item) => {
        const card = item.cardName;
        return card.includes(newList);
      });
    } else {
      result = listCart;
    }

    return (
      <section>
        <h4>Lista de cartas</h4>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ this.filterList }
          placeholder="filter"
        />
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
      </section>
    );
  }
}
List.propTypes = {
  listCart: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  /* ids: PropTypes.number.isRequired, */
};

export default List;
