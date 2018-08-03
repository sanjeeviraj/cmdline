import React, { Component } from 'react';
import './App.css';
/*import axios from 'axios';

let authkey = {
  "Accept": "application/json",
  "app_id": "a82998f3",
  "app_key": "3058a91d2f23df3b2c0ebaeb03b0195f"
};*/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {output:''};
  }
  getResponse = (word) => {
    if(word){
      /*let url = `https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${word}`
      axios.get(url,authkey).then((response)=> {
        console.log('response', response);
      })*/
      this.setState({output:'success'+Math.random()});
    } else {
      alert('no input');
    }
    
  }
  render() {
    return (
      <div className="App">
        <div className='inputarea'>
          <input type="text"/>
          <button onClick={this.getResponse}>Submit</button>
        </div>
        <div className='outputarea'>
          <span>{this.state.output}</span>
        </div>
      </div>
    );
  }
}

export default App;
