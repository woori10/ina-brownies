import '../style/hero/hero4.css';
import CardReview from './CardReview';

const Hero4 = () => {
  return (
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
  );
};

export default Hero4;
