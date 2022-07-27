import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { listCart } = this.props;
    return (
      <section>
        <strong>Lista de cartas</strong>
        {listCart.map((item, index) => (
          <div key={ index }>
            <span><strong><em>------Dados salvos------</em></strong></span>
            <p key={ index }>{item.cardName}</p>
            <p key={ index }>{item.cardImage}</p>
            <p key={ index }>{item.cardDescription}</p>
            <p key={ index }>{item.cardAttr1}</p>
            <p key={ index }>{item.cardAttr2}</p>
            <p key={ index }>{item.cardAttr3}</p>
            <p key={ index }>{item.cardRare}</p>
          </div>
        ))}
      </section>
    );
  }
}
List.propTypes = {
  listCart: PropTypes.string.isRequired,
};

export default List;
