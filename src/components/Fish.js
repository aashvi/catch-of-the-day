import React from 'react' ;

class Fish extends React.Component {

	render(){

		const { details } = this.props ;
		console.log(this)

		return (
				<li className="menu-fish"> 

						<img src ={details.image} alt ={details.name} />
						<h3 className= "fish-name">
							 {details.name}
							<span className= "price">{details.price}</span> 
						</h3>

						<button> Add to orders </button> 
				</li>




			)

		 
	}

}

export default Fish;