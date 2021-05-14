import React from 'react'
import './Products.css'
import Product from './Product'

const Products2 = () => {

	return (
		<div className="products">
			<div className="product">
				<h2>Comfy Styles for Her</h2>
				<div className="multipleImageContainer">
					<div className="smallGridItem">
						<img src="/images/smallGridImage5.jpg" alt="" />
						<span>Sweatshirts</span>
					</div>
					<div className="smallGridItem">
						<img src="/images/smallGridImage6.jpg" alt="" />
						<span>Joggers</span>
					</div>
					<div className="smallGridItem">
						<img src="/images/smallGridImage7.jpg" alt="" />
						<span>Cardigans</span>
					</div>
					<div className="smallGridItem">
						<img src="/images/smallGridImage8.jpg" alt="" />
						<span>Easy Tees</span>
					</div>
				</div>
				<a href="/">See More</a>
			</div>
			<Product title="Shop Laptops & Tablets" src="/images/product7.jpg" href="/" text="See more"/>
			<Product title="Explore home bedding" src="/images/product8.jpg" href="/" text="See more"/>
			<Product title="Create with strip lights" src="/images/product9.jpg" href="/" text="Shop now"/>
		</div>
	)
}

export default Products2;