import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpeg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
		
			<Link to="/">
				<img className="logo" src={logo} style={{width:"8rem"}}/>
			</Link>
			
			<div className="dropdown">
  				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorite
  				</button>
  			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    			{/* <li><a className="dropdown-item" href="#">b</a></li>
    			<li><a className="dropdown-item" href="#">Another action</a></li>
    			<li><a className="dropdown-item" href="#">Something else here</a></li> */}
				
  			</ul>
			</div>
			{/* <div classNameName="ml-auto">
				<Link to="/details/:">
				{/* <button classNameName="btn btn-primary">Provisional vista cardinfo</button> */}
				{/* </Link>
			</div> */} 
		</nav>
	);
};
