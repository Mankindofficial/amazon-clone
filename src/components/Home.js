import React from 'react'
import Carousel from './Carousel'
import Carousel2 from './Carousel2'
import Products from './Products'
import Products2 from './Products2'

const Home = () => {

	return (
		<div>
			<Carousel />
			<div style={{width:"95%", maxWidth:"1536px", margin:"0 auto"}}>
				<Products />
				<Carousel2 />
				<Products2 />
			</div>
		</div>
	)
}

export default Home;