import photo from '../../public/assets/photo.jpg';
import mockData from '../mocks/mockdata';
import '../styles/Aside.css';

const Aside = () => {
  return (
    <div className="aside">
      <div className="header horizontal-line">
        <img className="profile-photo" src={photo} alt="photo" />
        <h1>Diana Ichmoukhametov</h1>
        <h3 className="summary">
          Junior full-stack developer with a background in IT. With a strong
          foundation in technology and problem-solving skills, I am equipped to
          tackle challenges in software development.{' '}
        </h3>
      </div>

      <div className="infos horizontal-line">
        {mockData.infos.map((info) => {
          return (
            <div className="info-card" key={info.id}>
              <div className="card-img">
                <img src={info.img} alt={info.title} />
              </div>
              <div className="info-about">
                <div className="title">{info.title}</div>
                <a
                  className={
                    info.title === 'Website' ? 'underline-link' : 'infos-link'
                  }
                  href={info.href}
                >
                  {info.text}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="socials horizontal-line">
        <div className="card-title">Socials</div>
        {mockData.socials.map((item) => {
          return (
            <div className="social-card" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="info-about">
                <div className="title">{item.title}</div>
                <a className="underline-link" href={item.link}>
                  {item.text}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="languages">
        <div className="card-title">Languages</div>
        {mockData.languages.map((item) => {
          return (
            <div className="language-card" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="info-about">
                <div className="title-text title-lang">{item.title}</div>
                <div className="title">{item.text}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hobbies">
        <div className="card-title">Hobbies & Interests</div>

        {mockData.hobbies.map((item) => {
          return (
            <div className="hobby-card" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="info-about">
                <div className="title-text">{item.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aside;
