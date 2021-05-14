import './Header.css'

const Header = () => {

	return (
		<header className="header">
			<div className="page-header">
				<div className="header-group1">
					<div className="amazon-logo hover-effect">
						<img src="/images/amazon-logo.png" alt="LOGO" />
					</div>
					<div className="delivery-location hover-effect">
						<span><i className="fa fa-search"></i></span>
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
					<button><i className="fa fa-search"/></button>
				</div>
				<div className="header-group3">
					<div className="span-flex hover-effect">
						<span><i className="fa fa-search"></i></span>
					</div>
					<div className="span-flex hover-effect">
						<span>Hello, Sign In</span>
						<span>Accounts & Lists</span>
					</div>
					<div className="span-flex hover-effect">
						<span>Returns</span>
						<span>& Orders</span>
					</div>
					<div className="span-flex2 hover-effect">
						<span><i className="fa fa-search"></i></span>
						<span>Cart</span>
						<span className="cart-number">0</span>
					</div>
				</div>
			</div>
			<nav>
				<ul>
					<li>All</li>
					<li>Today's Deals</li>
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
