import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {output:''};
  }
  componentDidMount(){
    document.getElementById("textinput").focus();
  }
  addLine = (line) => {
    var textNode = document.createTextNode(line);
    //console.log('textNode',textNode);
    let linebr = document.createElement("br");
    document.getElementById("consoletext").appendChild(linebr);
    document.getElementById("consoletext").appendChild(textNode);
  }
  checkInput= (event) => { console.log('keydown')
    //let event ;
    //event = window.event || event.which;
    //console.log('event.event',event.key)
    if (event.key === 'Enter') {
        event.preventDefault();
        let word = document.getElementById("textinput").value;
        if(word){
          let url = `http://cognispire.com/reverse/reverse.ashx?name=${word}`
          axios.get(url).then((response)=> {
            console.log('response', response);
            this.addLine(document.getElementById("textinput").value);
            this.addLine(response.data);
            document.getElementById("textinput").value = "";
          });          
        }        
    }

    document.getElementById("textinput").style.height = (document.getElementById("textinput").scrollHeight) + "px";
  }


  getResponse = (word) => {
    if(word){
      let url = `http://cognispire.com/reverse/reverse.ashx?name=${word}`
      axios.get(url).then((response)=> {
        console.log('response', response);
      })
      
    } else {
      console.log('no response');
    }
    
  }
  render() {
    return (
      <div id = "background">
    <div id = "console">
        <p className="consoletext">
            Command line
        </p>
        <p className="consoletext" id = "consoletext">
            
        </p>
        <textarea rows = "1" id = "textinput" onKeyPress={this.checkInput}></textarea>
    </div>
</div>
    );
  }
}

export default App;
