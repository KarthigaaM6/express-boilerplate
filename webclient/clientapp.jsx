import React from 'react';
import ReactDOM from 'react-dom';
import {ChildA, ChildB} from './components/children.jsx';
import {GrandChild} from './components/grandchildren.jsx';

class MainComponent extends React.Component {
		static defaultProps = {
			name: 'vikramadithya'
		}
    constructor() {
        super();
        this.state = {
            surname: 'cholan'
        };
				// this.changeSurName = this.changeSurName.bind(this)
    }
    changeSurName(name) {
				let s = {surname: name};
				this.setState(s);

        // this.setState({surname: 'chozhan'});
    }
		changeMethod(){
			this.props.title = 'Title Changed';
		}
    render() {
        return (
            <div>
								<h1>{this.props.title}</h1>
								<button onClick={this.changeMethod.bind(this)}>Change Title</button>
                <h2>Parent - {this.props.name} {this.state.surname}</h2>
                <ChildA name='adithya karikala' surname={this.state.surname}/>
                <ChildB name='arunmozhi varma' surname={this.state.surname}/>
                <GrandChild  parentMethod={this.changeSurName.bind(this)} name='rajendra' surname={this.state.surname}/>
                {/* <button onClick={this.changeSurName.bind(this)}>Change Surname</button> */}
            </div>
        )
    }
}
ReactDOM.render(
    <MainComponent name='parantaka' title='Title'/>, document.getElementById('mountapp'));
