import "../style/hero/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Ina Brownies</h1>
        <p>
          Rasakan manisnya bolu dan brownies rumahan yang dibuat dengan sepenuh hati
          lembut, nikmat, dan penuh rasa. Teman sempurna untuk menemani setiap momen
          istimewa, mulai dari kumpul santai bersama keluarga tercinta hingga berbagi tawa
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
  );
};

export default Hero;
