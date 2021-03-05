import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

const Image = ({ name }) => {
  return (
		<StaticQuery 
		query={graphql`
				query GET_IMAGE {
					logo: file(relativePath: {eq: "logo.png"}) { 
								childImageSharp {
								fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
				
				}
			}
	}
}
		
`}
render={data =><Img fluid={data[name].childImageSharp.fluid} />}
/>
	)	
}

export default Image;