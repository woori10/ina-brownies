import '../style/hero/hero3.css'; // File CSS eksternal

const Hero3 = () => {
  return (
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
  );
};

export default Hero3;
