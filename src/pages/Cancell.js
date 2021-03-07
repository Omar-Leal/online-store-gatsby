import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'


const Cancelado = () => {
	return (
			<div>
					<SEO title='Compra cancelada'/>
					<Purchase>
									<h2>Has decidio no comprar</h2>
									<p>Regresa al catalogo para una mejor decisión</p>
									<p>Sabemos que algo quieres</p>
									<span role="img">
									  ❤
									</span>
									<Link to='/'>
															<Button>
																			Regresar al Home
															</Button>
									</Link>
					</Purchase>
			</div>
	)
}

export default Cancelado;