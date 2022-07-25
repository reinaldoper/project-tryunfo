import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          data-testid="name-input"
          name="nome"
          id="nomeInput"
        />
        <textarea name="texArea" data-testid="description-input" />
        <input type="number" name="inputNumber" data-testid="attr1-input" />
        <input type="number" name="inputNumber1" data-testid="attr2-input" />
        <input type="number" name="inputNumber2" data-testid="attr3-input" />
        <input type="text" name="inputNumber2" data-testid="image-input" />
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <input type="checkbox" name="checkbox" data-testid="trunfo-input" />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
