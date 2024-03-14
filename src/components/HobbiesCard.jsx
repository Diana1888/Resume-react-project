const HobbiesCard = ({ item }) => {
  return (
    <div className="hobby-card">
      <div className="card-img">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="info-about">
        <div className="title-text">{item.title}</div>
      </div>
    </div>
  );
};

export default HobbiesCard;
