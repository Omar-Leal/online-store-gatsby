import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFomart from '../utils/priceFormat'
import { CartContext } from '../context'



const Cart = () => {

	const { cart } = useContext(CartContext)

	const [ total, setTotal ] = useState(0)
	const [stripe, setStripe] = useState()

	const getTotal = () => {
		setTotal(
			cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0)
		)
	}

	useEffect(() => {

		setStripe(
			window.Stripe(process.env.STRIPE_PK)
		)
		getTotal()
		
	}, [])

	 const handleSubmit = async e => {
		 e.preventDefault()

		
					const { error } = await stripe.redirectToCheckout({
						lineItems: cart.map(({ id, quantity }) => ({ price: id, quantity})),
						mode: "subscription",
						successUrl: process.env.SUCCESS_REDIRECT,
						cancelUrl: process.env.CANCEL_REDIRECT,
					})
					if (error) {
						throw error
					}
	 }
	
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
										<img src={swag.metadata.img} alt={swag.name}/>
										{swag.name}
									</td>
									<td>
										USD {priceFomart(swag.unit_amount)}
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
						<small>Total {total}</small>
					</div>
					<div>
						<Link to='/'>
							<Button type='outline'>
								Come Back
							</Button>
						</Link>
						<Button onClick={handleSubmit}  disabled={cart.length === 0}>
							Buy now
						</Button>
					</div>

				</nav>
			</StyledCart>
		)
}

export default Cart;