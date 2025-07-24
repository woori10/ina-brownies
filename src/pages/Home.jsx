import CardReview from "../components/CardReview"; // Tetap digunakan dari Hero4
import "../style/hero/hero.css";
import "../style/hero/hero2.css";
import "../style/hero/hero3.css";
import "../style/hero/hero4.css";

const Home = () => {
  return (
    <div>
      {/* Bagian Hero */}
      <section className="hero">
        <div className="hero-left">
          <h1>Ina Brownies</h1>
          <p>
            Rasakan manisnya bolu dan brownies rumahan yang dibuat dengan sepenuh hati —
            lembut, nikmat, dan penuh rasa. Teman sempurna untuk menemani setiap momen
            istimewa, mulai dari kumpul santai bersama keluarga hingga berbagi tawa
            dengan teman seperjuangan.
          </p>
          <div className="hero-button-wrapper">
            <button className="hero-button">Pesan Sekarang</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-placeholder">
            <i className="fa fa-image" aria-hidden="true"></i>
          </div>
        </div>
      </section>

      {/* Bagian "Things We Bake with Love" */}
      <section className="things-section">
        <h2 className="section-title">Things We Bake with Love</h2>

        {/* Fudge Brownies */}
        <div className="bake-item">
          <div className="bake-image-container">
            <div className="bake-image"></div>
          </div>
          <div className="bake-text">
            <h3>Fudge Brownies</h3>
            <p>
              Brownies cokelat pekat dengan tekstur fudgy yang padat namun lembut di dalam.
              Dipanggang sempurna hingga bagian luar renyah, sementara bagian dalam tetap moist
              dan meleleh di mulut. Kaya akan rasa cokelat asli, cocok untuk pencinta manis.
            </p>
          </div>
        </div>

        {/* Bolu Lembut */}
        <div className="bake-item bake-item reverse">
          <div className="bake-text">
            <h3>Bolu Lembut</h3>
            <p>
              Bolu lembut dengan aroma harum yang menggoda, dibuat dari bahan-bahan pilihan.
              Teksturnya ringan, fluffy, dan meleleh di mulut. Cocok sebagai teman teh sore,
              sajian keluarga, atau bingkisan manis untuk orang terkasih.
            </p>
          </div>
          <div className="bake-image-container">
            <div className="bake-image"></div>
          </div>
        </div>
      </section>

      {/* Bagian "How to Order" */}
      <section className="how-to-order-container">
        <h2 className="how-to-order-title">How to Order ?</h2>
        <div className="how-to-order-step">
          Pilih brownies dan bolu yang ingin dibeli, isi data pengiriman dan pembayaran
        </div>
        <div className="how-to-order-step">
          Tunggu konfirmasi pesanan dan tunggu 2 hari untuk proses pembuatan
        </div>
        <div className="how-to-order-step">
          Setelah 2 hari, pesanan anda akan dikirim ke alamat anda
        </div>
      </section>

      {/* Bagian "Loved by Our Customers" */}
      <section className="review-section">
        <h2 className="review-title">Loved by Our Customers</h2>
        <div className="review-list">
          <CardReview
            name="Nama"
            order="pesanannya"
            text="Ex nulla proident excepteur nostrud ipsum enim sit exercitation eu nulla magna consequat aute enim."
          />
          <CardReview
            name="Nama"
            order="pesanannya"
            text="Ex nulla proident excepteur nostrud ipsum enim sit exercitation eu nulla magna consequat aute enim."
          />
          <CardReview
            name="Nama"
            order="pesanannya"
            text="Ex nulla proident excepteur nostrud ipsum enim sit exercitation eu nulla magna consequat aute enim."
          />
        </div>
      </section>

    </div>
  );
};

export default Home;
