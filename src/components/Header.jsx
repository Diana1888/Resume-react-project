import photo from '../assets/photo.jpg';
import '../styles/Aside.css';

const Header = () => {
  return (
    <div className="header horizontal-line">
      <img className="profile-photo" src={photo} alt="photo" />
      <h1>Diana Ichmoukhametov</h1>
      <h3 className="summary">
        Junior full-stack developer with a background in IT. With a strong
        foundation in technology and problem-solving skills, I am equipped to
        tackle challenges in software development.{' '}
      </h3>
    </div>
  );
};

export default Header;
