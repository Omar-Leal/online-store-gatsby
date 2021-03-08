import React from 'react'
import { ProductDetail } from '../components'

const Products = ({ pageContext }) => {
	return <ProductDetail {...pageContext} />
}

export default Products;