import React from 'react'
import './Products.css'

const Product = ({title, src, href, text}) => {

	return (
		<div className="product">
			<h2>{title}</h2>
			<div className="imageContainer">
				<img src={src} alt={title} />
			</div>
			<a href={href}>{text}</a>
		</div>
	)
}

export default Product;
