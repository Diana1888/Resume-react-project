import '../styles/Certificate.css';
import CertificateCard from './CertificatesCard';
import constants from '../constants/constants';

const CertificatesSection = () => {
  return (
    <div className="main-section">
      <div className="section-content">
        <h2 className="section-title">Certificates & Awards</h2>
        <div className="certificates-section-list">
          {constants.courses.map((course) => {
            return <CertificateCard key={course.id} course={course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
