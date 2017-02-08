import React from 'react';
import ReactDOM from 'react-dom';

export class GrandChild extends React.Component {
   constructor() {
       super();
       // this.onClick = this.onClick.bind(this);
   }
   onClick() {
     this.props.parentMethod('chozhan');
   }
   render() {
       return (
         <div>
           <h2>Grand Child - {this.props.name} {this.props.surname}</h2>
           <button onClick={this.onClick.bind(this)}>Change Surname</button>
         </div>
       )
   }
}
