import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFomart from '../utils/priceFormat'
import { CartContext } from '../context.js'

const Cart = () => {
	const { cart } = useContext(CartContext)
	
		return (
			<StyledCart>
				<h2>Wish list!</h2>
				<table>
					<tbody>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th>Chart</th>
							<th>Total</th>
						</tr>
						{cart.map(swag => (
							<tr key={swag.id}>
									<td>
										<img src={swag.metadata.img} src={swag.name}/>
									</td>
									<td>
										USD {swag.unit_amount}
									</td>
									<td>{swag.quantity}</td>
									<td>{priceFomart(swag.quantity * swag.unit_amount)}</td>
							</tr>
						))}
					</tbody>
				</table>
				<nav>
					<div>
						<h3>Subtotal: </h3>
						<small>Total:</small>
					</div>
					<div>
						<Link to='/'>
							<Button type='outline'>
								Come Back
							</Button>
						</Link>
						<Button>
							Buy now
						</Button>
					</div>

				</nav>
			</StyledCart>
		)
}

export default Cart;