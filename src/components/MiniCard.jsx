const MiniCard = ({ title, value }) => {
  return (
    <span className="containerMiniCard">
      <b style={{whiteSpace: "nowrap"}}>{title}:</b>
      {value}
    </span>
  );
}

export default MiniCard
