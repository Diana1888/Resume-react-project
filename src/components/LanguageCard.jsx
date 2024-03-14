const LanguageCard = ({ item }) => {
  return (
    <div className="language-card">
      <div className="card-img">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="info-about">
        <div className="title-text title-lang">{item.title}</div>
        <div className="title">{item.text}</div>
      </div>
    </div>
  );
};

export default LanguageCard;
