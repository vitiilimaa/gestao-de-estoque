const Card = ({ title, value }) => {
  return (
    <div className="containerCard">
      <p className="titleCard">{title}</p>
      <h1 className="valueCard">{value}</h1>
    </div>
  );
};

export default Card;
