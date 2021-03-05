import React from 'react'
import { StyledJumbo } from '../styles/components';



const Jumbo = (props) => {
	const heading2 = props.subtitle2.allSite.edges[0].node.siteMetadata.description; 
	
	return (
		<StyledJumbo>
			<div>
				<h2>!Consigue el mejor Swag exclusivo!</h2>
				<small>{heading2}</small>
			</div>
		</StyledJumbo>
	)
}

export default Jumbo;