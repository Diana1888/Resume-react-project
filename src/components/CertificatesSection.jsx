import '../styles/Certificate.css';
import CertificateCard from './CertificatesCard';
import constants from '../constants/constants';
import Section from './Section';

const CertificatesSection = () => {
  return (
    <Section title="Certificates & Awards">
      <div className="certificates-section-list">
        {constants.courses.map((course) => {
          return <CertificateCard key={course.id} course={course} />;
        })}
      </div>
    </Section>
  );
};

export default CertificatesSection;
