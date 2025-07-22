import '../style/cardreview.css'

const CardReview = ({ name, order, text }) => {
  return (
    <div className="card-container">
        <div className="card-review">
            <h3>{name}</h3>
            <p className="order">{order}</p>
            <div className="stars">
                {Array(5).fill(0).map((_, i) => (
                <span key={i}>★</span>
                ))}
            </div>
            <p className="review-text">{text}</p>
        </div>
    </div>
    
  );
};

export default CardReview;