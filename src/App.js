import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import List from './components/List';
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
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  ids: 0,
  saveForm: [],
};

const valoresIniciais = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
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

  disabledButon = () => {
    this.setState({
      isSaveButtonDisabled: true,
    });
  }

  saveButon = () => {
    const myId = 100;
    let id = Math.random();
    id = Math.floor(id * myId);
    const item = 210;
    const item3 = 90;
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;
    const valor = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
    const item2 = valor <= item;
    const card1 = Number(cardAttr1) <= item3;
    const card2 = Number(cardAttr2) <= item3;
    const card3 = Number(cardAttr3) <= item3;
    const item4 = Number(cardAttr1) < 0;
    const item5 = Number(cardAttr2) < 0;
    const item6 = Number(cardAttr3) < 0;
    if (cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0 && cardRare.length > 0 && item2 && card1 && card2 && card3
      && !item4 && !item5 && !item6) {
      if (cardTrunfo === true) {
        this.setState({
          hasTrunfo: true,
        });
      }
      this.setState({
        isSaveButtonDisabled: false,
        ids: id,
      });
    } else {
      this.disabledButon();
    }
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.saveButon());
  }

  onSaveButtonClick = () => {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, saveForm, hasTrunfo, ids,
    } = this.state;

    const save = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      ids,
    };
    this.setState({ saveForm: [...saveForm, save] });
    this.setState({ ...valoresIniciais });
  }

  delete = (item) => {
    const { saveForm } = this.state;
    const atualizaCard = saveForm.some((list) => list.ids === item && list.hasTrunfo);
    if (atualizaCard) {
      this.setState({
        hasTrunfo: false,
      });
    }
    const atualizaList = saveForm.filter((list) => list.ids !== item);
    this.setState({
      saveForm: atualizaList,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, saveForm } = this.state;
    return (
      <div className="app">
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
        <List
          listCart={ saveForm }
          onDelete={ this.delete }
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
