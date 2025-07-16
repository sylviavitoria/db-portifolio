import React from 'react';
import { Projeto } from '../types/projetos';

interface CardProps {
  projeto: Projeto;
}

const Card: React.FC<CardProps> = ({ projeto }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={projeto.imagem} alt={projeto.titulo} />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{projeto.titulo}</h3>
        
        <div className="card-technologies">
          {projeto.tecnologias.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <p className="card-description">{projeto.descricao}</p>
        
        <div className="card-buttons">
          {projeto.linkAcessar && (
            <a 
              href={projeto.linkAcessar} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Acessar
            </a>
          )}
          
          {projeto.linkGithub && (
            <a 
              href={projeto.linkGithub} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Github
            </a>
          )}
          
          {projeto.linkDeploy && (
            <a 
              href={projeto.linkDeploy} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;