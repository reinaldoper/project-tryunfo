import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { listCart, onDelete } = this.props;
    return (
      <section>
        <strong>Lista de cartas</strong>
        {listCart.map((item, index) => (
          <div key={ index }>
            <span><strong><em>------Dados salvos------</em></strong></span>
            <p key={ index + 1 }>{item.cardName}</p>
            <p key={ index + 1 }>{item.cardImage}</p>
            <p key={ index + 1 }>{item.cardDescription}</p>
            <p key={ index + 1 }>{item.cardAttr1}</p>
            <p key={ index + 1 }>{item.cardAttr2}</p>
            <p key={ index + 1 }>{item.cardAttr3}</p>
            <p key={ index + 1 }>{item.cardRare}</p>
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => onDelete(item.ids) }
            >
              Excluir
            </button>
          </div>
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
