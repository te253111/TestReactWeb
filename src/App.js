import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Display from './component/Display';
import { Label } from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      sun:[], mon:[], tue:[], wed:[], thu:[], fri:[],sat:[]
    }
  }

  componentDidMount() {
    axios.get(`http://uinames.com/api/?ext&amount=25`)
      .then(res => {
        this.setData(res.data);
      })
  }

  setData(datas){
    let sun = [];let mon = [];let tue = [];let wed = [];let thu = [];let fri = [];let sat = [];
    datas.map(function(data){
      var d = new Date(data.birthday.mdy);
      if(d.getDay()===0){
        sun.push(data);
      }else if(d.getDay()===1){
        mon.push(data);
      }else if(d.getDay()===2){
        tue.push(data);
      }else if(d.getDay()===3){
        wed.push(data);
      }else if(d.getDay()===4){
        thu.push(data);
      }else if(d.getDay()===5){
        fri.push(data);
      }else if(d.getDay()===6){
        sat.push(data);
      }
    });
    this.setState({sun});
    this.setState({mon});
    this.setState({tue});
    this.setState({wed});
    this.setState({thu});
    this.setState({fri});
    this.setState({sat});
  }



  render() {
    return (
      <div className="App">
        <h1><Label>Test React Web</Label></h1>
        <hr/>
          <div class="col-sm-2"></div>
          <div class="col-sm-1"><Display day="SUN" items = {this.state.sun}></Display></div>
          <div class="col-sm-1"><Display day="MON" items = {this.state.mon}></Display></div>
          <div class="col-sm-1"><Display day="TUR" items = {this.state.tue}></Display></div>
          <div class="col-sm-1"><Display day="WED" items = {this.state.wed}></Display></div>
          <div class="col-sm-1"><Display day="THU" items = {this.state.thu}></Display></div>
          <div class="col-sm-1"><Display day="FRI" items = {this.state.fri}></Display></div>
          <div class="col-sm-1"><Display day="SAT" items = {this.state.sat}></Display></div>
          <div class="col-sm-2"></div>
      </div>
    );
  }
}

export default App;
