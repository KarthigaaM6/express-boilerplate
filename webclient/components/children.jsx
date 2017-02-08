import React from 'react';
import ReactDOM from 'react-dom';

export class ChildA extends React.Component {
   constructor() {
       super();
   }
   render() {
       return (
         <div>
           <h2>Child A - {this.props.name} {this.props.surname}</h2>
         </div>
       )
   }
}

export class ChildB extends React.Component {
   constructor() {
       super();
   }
   render() {
       return (
         <div>
           <h2>Child B - {this.props.name} {this.props.surname}</h2>
         </div>
       )
   }
}
