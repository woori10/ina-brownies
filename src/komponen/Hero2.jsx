import "../style/hero/hero2.css";

const Hero2 = () => {
  return (
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
            Brownies cokelat pekat dengan tekstur fudgy yang padat namun lembut
            di dalam. Dipanggang sempurna hingga bagian luar renyah, sementara
            bagian dalam tetap moist dan meleleh di mulut. Setiap potongannya
            kaya akan rasa cokelat asli cocok untuk pencinta manis yang ingin
            memanjakan lidah di setiap gigitan.
          </p>
        </div>
      </div>

      {/* Bolu Lembut */}
      <div className="bake-item bake-item reverse">
        <div className="bake-text">
          <h3>Bolu Lembut</h3>
          <p>
            Bolu lembut dengan aroma harum yang menggoda, dibuat dari
            bahan-bahan pilihan. Teksturnya ringan, fluffy, dan meleleh di
            mulut. Cocok sebagai teman teh sore, sajian keluarga, atau bingkisan
            manis untuk orang terkasih.
          </p>
        </div>
        <div className="bake-image-container">
          <div className="bake-image"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
