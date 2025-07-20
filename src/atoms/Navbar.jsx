import { useState } from "react";
import "../style/navbar.css"; // ✅ Import CSS eksternal

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Ina Brownies</div>
      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <a href="/">Beranda</a>
        <a href="/produk">Produk</a>
         <a href="/produk">Riwayat</a>
        <a href="/kontak">Kontak</a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
