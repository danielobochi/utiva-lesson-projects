// Do your assigment here
import "../styles/CardComponent.css";

function CardComponent(props) {
  return (
    <div className="card">
      <div className="title" style={{ background: props.colour }}>
        <h2 className="fs-1">{props.title}</h2>
      </div>

      <div className="description">
        <p>{props.description}</p>
      </div>

      <button
        className="btn-secondary w-50 align-self-end"
        onClick={props.addToCart}
      >
        Add to cart
      </button>
    </div>
  );
}

export default CardComponent;
