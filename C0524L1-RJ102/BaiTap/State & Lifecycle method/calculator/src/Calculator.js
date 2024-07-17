import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubtraction = this.handleSubtraction.bind(this);
    this.handleMultiplication = this.handleMultiplication.bind(this);
    this.handleDivision = this.handleDivision.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAddition() {
    const { num1, num2 } = this.state;
    this.setState({
      result: parseInt(num1) + parseInt(num2),
    });
  }

  handleSubtraction() {
    const { num1, num2 } = this.state;
    this.setState({
      result: parseInt(num1) - parseInt(num2),
    });
  }

  handleMultiplication() {
    const { num1, num2 } = this.state;
    this.setState({
      result: parseInt(num1) * parseInt(num2),
    });
  }

  handleDivision() {
    const { num1, num2 } = this.state;
    this.setState({
      result: parseInt(num1) / parseInt(num2),
    });
  }

  render() {
    return (
      <div style={{ border: '1px solid #000', padding: '20px', width: '200px', textAlign: 'center' }}>
        <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.handleChange}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.handleChange}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <div>
          <p>Result: {this.state.result}</p>
          <button onClick={this.handleAddition}>+</button>
          <button onClick={this.handleSubtraction}>-</button>
          <button onClick={this.handleMultiplication}>x</button>
          <button onClick={this.handleDivision}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
