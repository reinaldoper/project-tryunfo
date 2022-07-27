import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      listCart } = this.props;
    console.log(listCart);
    /* let currentValu;
    if (cardTrunfo) {
      currentValu = <p data-testid="trunfo-card">Super Trunfo</p>;
    } */
    return (
      <div>
        <p data-testid="name-card">{cardName}</p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {listCart.map((item, index) => (
          <div key={ index }>
            <span>Dados salvos</span>
            <p key={ index }>{item.cardName}</p>
            <p key={ index }>{item.cardImage}</p>
            <p key={ index }>{item.cardDescription}</p>
            <p key={ index }>{item.cardAttr1}</p>
            <p key={ index }>{item.cardAttr2}</p>
            <p key={ index }>{item.cardAttr3}</p>
            <p key={ index }>{item.cardRare}</p>
          </div>
        ))}
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  listCart: PropTypes.string.isRequired,
};
export default Card;
