import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { listCart, onDelete } = this.props;
    return (
      <section>
        <strong>Lista de cartas</strong>
        {listCart.map((item, index) => (
          <ul key={ index }>
            <span><strong><em>------Dados salvos------</em></strong></span>
            <li>{item.cardName}</li>
            <li>{item.cardImage}</li>
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
