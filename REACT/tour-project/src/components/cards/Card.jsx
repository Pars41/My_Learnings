import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item) => {
        const { id, title, desc, image } = item;

        return (
          <div className="cards">
            <h2 key={id}>{title}</h2>
            <img src={image} alt={title} />
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
