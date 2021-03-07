import React from 'react'
import { SEO }from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

const Gracias = () => {
		return (
			<div>
					<SEO title='Compra Exitosa!'/>
					<Purchase>
									<h2>Compra exitosa</h2>
									<p>Espero que disfrutes tu Swag</p>
									<p>Te esperamos de vuelta</p>						
									<Link to='/'>
														<Button>
																		Regresar al catalogo
														</Button>
									</Link>
					</Purchase>
			</div>
		)
}

export default Gracias;