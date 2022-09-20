/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'

// Importing Properties file
import Header_class_based from '../Class/html/Header/Heaader_class_based-functions_li';
import Header_class_based_img from '../Class/html/Header/Heaader_class_based-functions_img';

// Importing Class based
import logo from '../Class/images/icons/logo-sm.png';
import search from '../Class/images/icons/search-icon-sm.png';
import cart from '../Class/images/icons/cart-sm.png';

class Header extends Component {
  render() {
    return (
        <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="/logo/"><img src={logo} alt="" /></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
              <Header_class_based url="/mac/" name="Mac" />
              <Header_class_based url="/iphone/" name="Iphone" />
              <Header_class_based url="/ipad/" name="Ipad" />
              <Header_class_based url="/watch/" name="Watch" />
              <Header_class_based url="/tv/" name="tv" />
              <Header_class_based url="/music/" name="Music" />
              <Header_class_based url="/support/" name="Support" />
              <Header_class_based_img linkUrl="/search/" img={search} />
              <Header_class_based_img linkUrl="/cart/" img={cart} />
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
    )
  }
}

export default Header;