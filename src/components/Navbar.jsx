import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="navbar-logo" src=""><Link to="/admin">Ina Brownies</Link></div>

      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={()=>{setMenuOpen("home")}}><Link to="/">Beranda</Link>{menuOpen==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenuOpen("produk")}}><Link to="/produk">Produk</Link> {menuOpen==="produk"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenuOpen("riwayat")}}><Link to="/riwayat">Riwayat</Link> {menuOpen==="riwayat"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenuOpen("kontak")}}><Link to="/kontak">Kontak</Link> {menuOpen==="kontak"?<hr/>:<></>}</li>
      </div>
      
      <div className="navbar-cart">
        <div className="cart-icon-wrapper">
          <Link to="/keranjang"><FontAwesomeIcon icon={faShoppingCart} size="lg" /></Link>
          <span className="cart-count">0</span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
