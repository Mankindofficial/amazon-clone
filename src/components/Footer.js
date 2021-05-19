import React from 'react'
import './Footer.css'


const Footer = () => {
	const [show, setShow] = React.useState("none");

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    setShow("flex")
	  } else {
	    setShow("none")
	  }
	}

	return (
		<footer className="footer">
			<div className="page-footer">
				<a className="back-to-top" href="/#" style={{display:show}}>
					Back to Top
					<img src="/images/caret-down.svg" alt="top"/>
				</a>
				<p>Amazon recreated from scratch by Makinde Opeyemi</p>
				<a href = "mailto:mankindofficial1@gmail.com?subject=Developer+Contact&body=Hello+Makinde+Opeyemi">
					mankindofficial1@gmail.com
				</a>
			</div>
		</footer>
	)
}

export default Footer;