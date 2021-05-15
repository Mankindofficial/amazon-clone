import './Header.css'
import { Link } from 'react-router-dom'
import { ContextConsumer } from '../AppContext'

const Header = () => {

  const { state } = ContextConsumer()

	return (
		<header className="header">
			<div id="page-header">
				<div className="header-group1">
					<Link to="/">
						<div className="amazon-logo hover-effect">
							<img src="/images/amazon-logo.png" alt="LOGO" />
						</div>
					</Link>
					<div className="delivery-location hover-effect">
						<span><img src="/images/location.svg" alt="User location" /></span>
						<div className="span-flex">
							<span>Deliver to</span>
							<span>Nigeria</span>
						</div>
					</div>
				</div>
				<div className="input-group">
					<select className="nav-select">
						<option>All</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories that are necessary</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
						<option>All Categories</option>
					</select>
					<input type="text"/>
					<button><img src="/images/search.svg" alt="search" /></button>
				</div>
				<div className="header-group3">
					<div className="hover-effect location">
						<img src="/images/usa-flag.svg" alt="location" />
						<img className="caret" src="/images/caret-down.svg" alt="dropdown" />
					</div>
					<div className="span-flex hover-effect">
						<span>Hello, Sign In</span>
						<span>
							Accounts & Lists
							<img className="caret" src="/images/caret-down.svg" alt="dropdown" />
						</span>
					</div>
					<div className="span-flex hover-effect">
						<span>Returns</span>
						<span>& Orders</span>
					</div>
					<Link to="/checkout">
						<div className="span-flex2 hover-effect">
							<span><img src="/images/cart.svg" alt="cart"/></span>
							<span>Cart</span>
							<span className="cart-number">{state.basket.length}</span>
						</div>
					</Link>
				</div>
			</div>
			<nav>
				<ul>
					<li>All</li>
					<Link to="/products"><li>Today's Deals</li></Link>
					<li>Customer Service</li>
					<li>Gift Cards</li>
					<li>Registry</li>
					<li>Sell</li>
					<li className="last">Amazon's response to COVID-19</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
