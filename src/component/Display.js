import React, { Component } from 'react';
import './Display.css';
import { Image } from 'react-bootstrap';

class Display extends Component {

   render() {
    return (
      <div className="ridge">
         <h4>{this.props.day}</h4>
         {
                this.props.items.map(function(item) {
                    return <div>
                      <div><Image src={item.photo} responsive /></div>
                      <div>{item.name}</div>
                      <div>{item.birthday.dmy}</div>
                    </div>
                })
          }
      </div>
    );
  }
}

export default Display;
