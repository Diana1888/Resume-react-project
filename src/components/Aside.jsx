import mockData from '../mocks/mockdata';
import '../styles/Aside.css';
import Header from './Header';
import HobbiesCard from './HobbiesCard';
import InfosCard from './InfosCard';
import LanguageCard from './LanguageCard';

const Aside = () => {
  return (
    <div className="aside">
      <div className="header horizontal-line">
        <Header />
      </div>

      <div className="infos horizontal-line">
        {mockData.infos.map((info) => {
          return <InfosCard info={info} key={info.id} />;
        })}
      </div>

      <div className="socials horizontal-line">
        <div className="card-title">Socials</div>
        {mockData.socials.map((info) => {
          return <InfosCard info={info} key={info.id} />;
        })}
      </div>

      <div className="languages">
        <div className="card-title">Languages</div>
        {mockData.languages.map((item) => {
          return <LanguageCard item={item} key={item.id} />;
        })}
      </div>

      <div className="hobbies">
        <div className="card-title">Hobbies & Interests</div>
        {mockData.hobbies.map((item) => {
          return <HobbiesCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Aside;
