import React from 'react'
import { Link } from 'gatsby'
import formatprice  from '../utils/priceFormat.js'
import { StyledProducts } from '../styles/components'

const Products = ({ products }) => {
	return (
		<StyledProducts>
			<h2>Jackets</h2>
					<section>
						{products.map(({node}) => {
								const price = formatprice(node.unit_amount)
								return (
									<article key={node.id}>
											<img src={node.product.metadata.img} alt={node.product.name}></img>
											<p>{node.product.name}</p>
											<small>USD {price}</small>
											<Link to={`/${node.id}`}>
												Buy now <span> ➝ </span>
											</Link>
									</article>
								)
						})}
					</section>
		</StyledProducts>
	)
}

export default Products;