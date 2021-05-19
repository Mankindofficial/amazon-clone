import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const Product = ({title, src, href, text}) => {

	return (
		<div className="product">
			<h2>{title}</h2>
			<div className="imageContainer">
				<Link to="/products">
					<img src={src} alt={title} />
				</Link>
			</div>
			<Link to="/products">{text}</Link>
		</div>
	)
}

export default Product;
