const MiniCard = ({ title, value }) => {
  return (
    <span className="containerMiniCard">
      <b>{title}:</b>
      {value}
    </span>
  );
}

export default MiniCard
