import React from 'react' ;
import Fish from './Fish';



const Header = (props) => {


		return (

				<header className="top">
				<h1>Catch 
					<span className="ofThe">
					<span className="of">of </span>
					<span className="The">The </span>
					</span>
				 day 

				</h1>
				<h3 className="tagline"> <span>{props.tagline} </span></h3>
				<Fish />
				</header>

			)

}


		 


export default Header;