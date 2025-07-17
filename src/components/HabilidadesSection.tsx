import Habilidade from './Habilidade';
import { habilidades } from '../types/habilidades';

const HabilidadesSection = () => {
  return (
    <div className="skills-section">
      <h1 className="section-title">Habilidades</h1>
      <div className="skills-container">
        {Object.entries(habilidades).map(([categoria, skillList]) => (
          <div key={categoria} className="skill-category">
            <h2 className="skill-category-title">{categoria}</h2>
            <div className="skill-list">
              {skillList.map((skill, index) => (
                <Habilidade
                  key={index}
                  titulo={skill.titulo}
                  nivel={skill.nivel}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabilidadesSection;