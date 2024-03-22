import constants from '../constants/constants';
import '../styles/Aside.css';
import Header from './Header';
import HobbiesCard from './HobbiesCard';
import InfosCard from './InfosCard';
import LanguageCard from './LanguageCard';

const Aside = () => {
  return (
    <div className="aside">
        <Header />
      <div className="info-columns">
        <div className="infos horizontal-line">
          {constants.infos.map((info) => {
            return <InfosCard info={info} key={info.id} />;
          })}
        </div>

        <div className="socials horizontal-line">
          <div className="card-title">Socials</div>
          {constants.socials.map((info) => {
            return <InfosCard info={info} key={info.id} />;
          })}
        </div>

        <div className="languages">
          <div className="card-title">Languages</div>
          {constants.languages.map((item) => {
            return <LanguageCard item={item} key={item.id} />;
          })}
        </div>

        <div className="hobbies">
          <div className="card-title">Hobbies & Interests</div>
          {constants.hobbies.map((item) => {
            return <HobbiesCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Aside;
