import React, { useState } from 'react'
import priceFormat from '../utils/priceFormat'
import { 
	Tag, 
	SizeButton, 	
	SizeSelect, 
	Button, 
	StyledProductDetail,
	QtySelect 
} from '../styles/components'
import { SEO, Stars } from './'



const ProductDetail = ({
	id,
  unit_amount,
  product: { name, metadata }
}) => {
	const FormattedPrice = priceFormat(unit_amount)
	const [size,setSize] = useState(2);
	const [qty, setQty] = useState(1);
	return (
	  <StyledProductDetail>
				<SEO title={name} />
				<img src={metadata.img} alt={name}/>
				<div>
					<Tag>Rating</Tag>
					<h2>{name}</h2>
					<b>USB {FormattedPrice}</b>
					<Stars /> 
					<small>{metadata.description_}</small>
					{metadata.wear && (
						<SizeSelect selected={size} >
							<SizeButton onClick={(e) => setSize(1)}>XS</SizeButton>
							<SizeButton onClick={(e) => setSize(2)}>S</SizeButton>
							<SizeButton onClick={(e) => setSize(3)}>M</SizeButton>
							<SizeButton onClick={(e) => setSize(4)}>L</SizeButton>
						</SizeSelect>
					)}
					<p>Cantidad: </p>
					<QtySelect>
						<button onClick={() => (qty > 1 ? setQty(qty - 1): null)}>-</button>
						<input type='text' disable value={qty} />
						<button onClick={() => setQty(qty+1)} >+</button>
					</QtySelect>
					<Button>
						Add to wish list
					</Button>
				</div>
		</StyledProductDetail>
	)
}

export default ProductDetail;