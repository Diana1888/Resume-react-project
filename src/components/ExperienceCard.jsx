import location from '../assets/location.svg';
import '../styles/Experience.css';

const ExperienceCard = ({ result }) => {
  return (
    <div className="experience-content">
      <div className="divider-block">
        <div className="block-bullet">
          <div className="bullet"></div>
        </div>
        <div className="divider"></div>
      </div>
      <div className="experience-card">
        <div className="experience-card-item">
          <p className="experience-card-year">
            {result.year}{' '}
            <img
              className="experience-location"
              src={location}
              alt="location"
            />{' '}
            <span>Online</span>{' '}
          </p>
          <div className="experience-card-block">
            <img
              className="experience-card-img"
              src={result.img}
              alt={result.title}
            />
            <div className="experience-card-subtitle">
              <p className="experience-role">{result.role}</p>
              <p className="experience-card-title">{result.title}</p>
            </div>
          </div>
        </div>
        <div className="card-description">
          <p className="experience-card-name">{result.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
