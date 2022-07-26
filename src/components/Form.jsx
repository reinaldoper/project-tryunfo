import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo } = this.props;
    let current;
    if (!hasTrunfo) {
      current = (<input
        type="checkbox"
        name="cardTrunfo"
        data-testid="trunfo-input"
        checked={ cardTrunfo }
        onChange={ onInputChange }
      />);
    } else {
      current = <p>Você já tem um Super Trunfo em seu baralho</p>;
    }

    return (
      <form>
        <label htmlFor="dame-carta">
          Nome da carta
          <input
            type="text"
            id="dame-carta"
            data-testid="name-input"
            placeholder="Nome carta"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
            required
          />
        </label>
        <br />
        <label htmlFor="carta-descricao">
          Descrição
          <textarea
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            placeholder="Descrição"
            id="carta-descricao"
            required
          />
        </label>
        <br />
        <label htmlFor="card1">
          Card atribute 1
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            required
            id="card1"
          />
        </label>
        <br />
        <label htmlFor="card2">
          Card atribute 2
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            required
            id="card2"
          />
        </label>
        <br />
        <label htmlFor="card3">
          Card atribute 3
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            required
            id="card3"
          />
        </label>
        <br />
        <label htmlFor="img">
          Imagem
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            required
            id="img"
          />
        </label>
        <br />
        <label htmlFor="select">
          Select
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            required
            id="select"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        { current }
        <br />
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
