import React, { Component } from 'react';
import Smurfs from './Smurfs';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  

 

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.addSmurf}>
          <input
            onChange={this.props.handleChange}
            placeholder="name"
            value={this.props.name}
            name="name"
          />
          <input
            onChange={this.props.handleChange}
            placeholder="age"
            value={this.props.age}
            name="age"
          />
          <input
            onChange={this.props.handleChange}
            placeholder="height"
            value={this.props.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
