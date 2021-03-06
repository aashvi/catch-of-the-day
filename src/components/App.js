import React from 'react' ;

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

	constructor(){

		super();

		this.addFish= this.addFish.bind(this);
		this.loadSamples= this.loadSamples.bind(this);

		this.state ={
			fishes:{},
			orders:{}
		}
	}

	addFish(fish){

//update state
	const fishes ={...this.state.fishes};
	// add new fish to the state 
	const t =  Date.now();
	fishes[`fish-${t}`]=fish;
// set new state

	this.setState({fishes});

	}



  loadSamples(){
  	this.setState({fishes:sampleFishes});

  }


	render(){
		return (

			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Hello world"/>
					<ul className="list-of-fishes">


					{ Object
						.keys(this.state.fishes)
						.map(key => <Fish key={key} details={this.state.fishes[key]} />)}
					
					</ul>
				</div>
				<Order/>
				<Inventory addFish= {this.addFish} loadSamples={this.loadSamples} />
			
				{console.log('xd')}
			</div>
			)

		 
	}

}

export default App;