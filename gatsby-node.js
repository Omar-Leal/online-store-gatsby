const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const productTemplate = path.resolve(`src/templates/Product.js`)
	const  result = await graphql(`
	   query GET_DATA {			

						allStripePrice {
								edges {
										node {
												id 
												unit_amount
												product {
															name
															metadata {
																		img
																		wear
																		description_
															}
												}
										}
								}
						}


		 }
	
	`)
	if(result.errors) {
		throw results.errors
	}

	result.data.allStripePrice.edges.forEach(({node}) => {
		createPage({ 
			path: `${node.id}`,
      component: productTemplate,
		 })
	})
}

