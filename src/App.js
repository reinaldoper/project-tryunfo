import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

const valores = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
  onSaveButtonClick: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = valores;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Tryunfo</h1>
        <Form current={ this.state } onInputChange={ this.onInputChange } />
        <Card current={ this.state } />
      </div>
    );
  }
}

export default App;
