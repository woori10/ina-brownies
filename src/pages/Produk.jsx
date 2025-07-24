import "../style/produk.css";

const produkList = [
  {
    id: 1,
    nama: "Fudgie Brownies Polos",
    deskripsi: "Brownies manis, lembut dan lumer di setiap gigitan.",
    harga: "Rp 100.000",
    rating: "⭐ 4.9",
  },
  {
    id: 2,
    nama: "Fudgie Brownies Choco Chip",
    deskripsi: "Brownies dengan topping choco chip yang crunchy.",
    harga: "Rp 100.000",
    rating: "⭐ 4.9",
  },
  {
    id: 3,
    nama: "Fudgie Brownies Polos",
    deskripsi: "Brownies dengan topping kacang almond yang crunchy.",
    harga: "Rp 100.000",
    rating: "⭐ 4.9",
  },
  {
    id: 4,
    nama: "Fudgie Brownies Kacang",
    deskripsi: "Brownies dengan topping kacang yang crunchy.",
    harga: "Rp 100.000",
    rating: "⭐ 4.9",
  },
  {
    id: 5,
    nama: "Fudgie Brownies Keju",
    deskripsi: "Brownies dengan topping keju yang gurih.",
    harga: "Rp 100.000",
    rating: "⭐ 4.9",
  },
  {
    id: 6,
    nama: "Fudgie Brownies Mix 2",
    deskripsi: "Brownies ditambah dengan topping kacang almond yang crunchy.",
    harga: "Rp 100.000",
    rating: "⭐ 4.9",
  },
];

const Produk = () => {
  return (
    <div className="produk-container">
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
      </div>

      <div className="produk-grid">
        {produkList.map((item) => (
          <div className="produk-card" key={item.id}>
            <div className="produk-img" />
            <h4 className="produk-nama">{item.nama}</h4>
            <p className="produk-deskripsi">{item.deskripsi}</p>
            <div className="produk-footer">
              <span className="produk-rating">{item.rating}</span>
              <span className="produk-harga">{item.harga}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produk