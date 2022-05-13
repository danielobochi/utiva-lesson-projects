// Do your assigment here
import "../styles/CardComponent.css";

function CardComponent(props) {
  return (
    <div className="card">
      <div className="title" style={{ background: props.colour }}>
        <h2>{props.title}</h2>
      </div>

      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CardComponent;
