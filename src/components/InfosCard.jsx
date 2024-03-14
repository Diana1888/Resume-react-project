const InfosCard = ({ info }) => {
  return (
    <div className="info-card">
      <div className="card-img">
        <img src={info.img} alt={info.title} />
      </div>
      <div className="info-about">
        <div className="title">{info.title}</div>
        <a
          className={info.title === 'Website' ? 'underline-link' : 'infos-link'}
          href={info.href}
        >
          {info.text}
        </a>
      </div>
    </div>
  );
};

export default InfosCard;
