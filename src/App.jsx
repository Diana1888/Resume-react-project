import './App.css';
import Aside from './components/Aside';
import CertificatesSection from './components/CertificatesSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import LatestProjectSection from './components/LatestProjectSection';
import ToolsSection from './components/ToolsSection';

function App() {

  return (
    <div className='container'>
      <Aside />
      <div className='sections'>
        <EducationSection />
        <ExperienceSection />
        <ToolsSection />
        <LatestProjectSection />
        <CertificatesSection />
      </div>
    </div>
  );
}

export default App;
