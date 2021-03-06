import React from 'react' ;
import  { getFunName } from '../helpers';

class StorePicker extends React.Component {


	constructor(){
		super();
		this.goToStore = this.goToStore.bind(this)


	}

	goToStore(event){
		event.preventDefault();

		console.log('this')
		console.log(this.storeInput.value)

		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`)
		this.context.router.transitionTo(`/store/${storeId}`);

		}

	render(){
		return (

			<form className="Store-selector" onSubmit={this.goToStore}>
			<h2> Please enter a store</h2>
			<input type="text" required placeholder="Store Name" defaultValue={ getFunName()} ref={(input)=>{this.storeInput=input}}/>
			<button type="submit">Visit store</button>
			</form>


			)

		 
	}

}



StorePicker.contextTypes ={

	router: React.PropTypes.object
}
export default StorePicker;