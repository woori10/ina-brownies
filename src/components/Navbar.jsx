import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // boolean

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

      <div className="navbar-logo">
        <Link to="/admin">Ina Brownies</Link>
      </div>

      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setActivePage("home")}><Link to="/">Beranda</Link>{activePage === "home" && <hr />}</li>
        <li onClick={() => setActivePage("produk")}><Link to="/produk">Produk</Link>{activePage === "produk" && <hr />}</li>
        <li onClick={() => setActivePage("riwayat")}><Link to="/riwayat">Riwayat</Link>{activePage === "riwayat" && <hr />}</li>
        <li onClick={() => setActivePage("kontak")}><Link to="/kontak">Kontak</Link>{activePage === "kontak" && <hr />}</li>
      </div>
      
      <div className="navbar-cart">
        <div className="cart-icon-wrapper">
          <Link to="/keranjang">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </Link>
          <span className="cart-count">0</span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
