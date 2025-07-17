import Card from '../components/Card';
import { projetos } from '../types/projetos';

const Projetos = () => {
  return (
    <div className="projetos-container">
      <div className="projetos-header">
        <h2 className="projetos-subtitle">Meus</h2>
        <h1 className="projetos-title">Projetos</h1>
      </div>
      
      <div className="projetos-grid">
        {projetos.map((projeto) => (
          <Card key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </div>
  );
};

export default Projetos;