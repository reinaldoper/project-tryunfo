import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

const valores = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = valores;
  }

  saveButon = () => {
    const item = 210;
    const item3 = 90;
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valor = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
    const item2 = valor <= item;
    const card1 = Number(cardAttr1) <= item3;
    const card2 = Number(cardAttr2) <= item3;
    const card3 = Number(cardAttr3) <= item3;
    const item4 = Number(cardAttr1) < 0;
    const item5 = Number(cardAttr2) < 0;
    const item6 = Number(cardAttr3) < 0;
    if (cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0 && cardRare.length > 0
      && item2 && card1 && card2 && card3
      && !item4 && !item5 && !item6) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.saveButon());
  }

  onSaveButtonClick = ({ target }) => {
    target.preventDefault();
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div className="app">
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
