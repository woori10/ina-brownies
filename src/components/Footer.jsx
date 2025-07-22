import "../style/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>Ex nulla proident excepteur nostrud ipsum enim sit exercitation eu nulla magna consequat aute enim.</p>
            </div>
            <div className="footer-menu">
                <h3>MENU</h3>
                <ul>
                    <li>HOME</li>
                    <li>PRODUK</li>
                    <li>RIWAYAT</li>
                    <li>KONTAK</li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>CONTACT INFORMATION</h3>
                <ul>
                    <li><i className="fa fa-phone"></i> No Telp</li>
                    <li><i className="fa fa-envelope"></i> Email</li>
                    <li><i className="fa fa-instagram"></i> Instagram</li>
                    <li><i className="fa fa-facebook"></i> Facebook</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
