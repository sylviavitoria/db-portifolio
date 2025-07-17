import PerfilSection from '../components/PerfilSection';
import FotoSection from '../components/FotoSection';
import HabilidadesSection from '../components/HabilidadesSection';

const Home = () => {
  return (
    <div className="sobre-container">
      <div className="main-content">
        <PerfilSection />
        
        <div className="right-content">
          <FotoSection />
          <HabilidadesSection />
        </div>
      </div>
    </div>
  );
};

export default Home;