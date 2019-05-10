import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route , NavLink } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      id: '',
      name: '',
      age: '',
      height: ''
    };
  }



  async componentDidMount() {
    try{ let res = await axios.get('http://localhost:3333/smurfs');
    this.setState({smurfs: res.data})
  console.log(this.state.smurfs)} catch(err){
    console.error(err)
    }
  }

  addSmurf = event => {
    event.preventDefault();
    const addSmurfs = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    // add code to create the smurf using the api
    //this.setState({addSmurfs: res.data})
    axios
    .post(`http://localhost:3333/smurfs/`, addSmurfs)
    .then(res => this.setState({smurfs:res.data}))
    .catch(err => console.log(err));
    this.setState({

      name: '',
      age: '',
      height: ''

    });
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home </NavLink>
          <NavLink to="/addSmurfs"> Add Smurf</NavLink>
        </nav>

      <Route path="/addSmurfs" render={props =>
        <SmurfForm addSmurf={this.addSmurf} handleChange={this.handleInputChange} {...this.state}/>
      }/>
      <Route path="/" render={props => 
        <Smurfs smurfs={this.state.smurfs} />
      }/>
      </div>
    );
  }
}

export default App;
