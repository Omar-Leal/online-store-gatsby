import React from 'react'
import { StyledJumbo } from '../styles/components';
import {Image } from './';


const Jumbo = (props) => {
	const heading2 = props.subtitle2.allSite.edges[0].node.siteMetadata.description; 
	
	return (
		<StyledJumbo>
			<div>
				<h2>!Consigue el mejor Swag exclusivo!</h2>
				<small>{heading2}</small>
			</div>
			<Image name='logo' /> 
		</StyledJumbo>
	)
}

export default Jumbo;