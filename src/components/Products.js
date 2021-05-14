import React from 'react'
import './Products.css'
import Product from './Product'

const Products = () => {

	return (
		<div className="products">
			<Product title="Computers And Accessories" src="/images/product1.jpg" href="/" text="Shop Now"/>
			<Product title="Beauty Picks" src="/images/product2.jpg" href="/" text="Shop Now"/>
			<div className="product">
				<h2>Shop by Category</h2>
				<div className="multipleImageContainer">
					<div className="smallGridItem">
						<img src="/images/smallGridImage1.jpg" alt="" />
						<span>Computers And Accessories</span>
						<span className="layerA"/>
					</div>
					<div className="smallGridItem">
						<img src="/images/smallGridImage2.jpg" alt="" />
						<span>Video Games</span>
						<span className="layerA"/>
					</div>
					<div className="smallGridItem">
						<img src="/images/smallGridImage3.jpg" alt="" />
						<span>Baby</span>
						<span className="layerA"/>
					</div>
					<div className="smallGridItem">
						<img src="/images/smallGridImage4.jpg" alt="" />
						<span>Toys and Games</span>
						<span className="layerA"/>
					</div>
				</div>
				<a href="/">Shop Now</a>
			</div>
			<div className="pageAd">
				<div className="signIn">
					<h2>Sign in for the best experience</h2>
					<button>Sign In Securely</button>
				</div>
				<div className="adImageContainer">
					<img src="/images/product3.jpg" alt="AMAZON-ADS" />
				</div>
			</div>
			<Product title="Shop Top Categories" src="/images/product3.jpg" href="/" text="See More"/>
			<Product title="Amazon Basics" src="/images/product4.jpg" href="/" text="See More"/>
			<Product title="Get Fit At Home" src="/images/product5.jpg" href="/" text="Explore Now"/>
			<Product title="Find Your Ideal TV" src="/images/product6.jpg" href="/" text="See More"/>
		</div>
	)
}

export default Products;