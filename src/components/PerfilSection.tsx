import React from 'react';

const PerfilSection = () => {
  return (
    <div className="left-content">
      <div className="greeting">
        <h2 className="greeting-text">Olá, meu nome é</h2>
      </div>

      <div className="name-section">
        <h1 className="name">Sylvia Vitória</h1>
        <h2 className="position">
          Sou trainee de desenvolvimento de software na DBServer
        </h2>
      </div>

      <div className="about-section">
        <h1 className="section-title">Sobre mim</h1>
        <h2 className="about-text">
          Estudante do 6º período de Sistemas de Informação, minha jornada na área de tecnologia começou em 2023 e tem sido marcada por um aprendizado constante e pela busca por desafios que me façam crescer.
          Tenho conhecimento em linguagens como Java e JavaScript/TypeScript, além de experiência com frameworks e ferramentas como Spring Boot, React, HTML5, CSS3, Swagger e Postman.
          Sou apaixonada por tecnologia e comprometida com a entrega de código de qualidade, seguindo boas práticas como os princípios S.O.L.I.D e Clean Code. 
          Tenho um perfil proativo, criativo e focado em aprendizado contínuo. Busco uma oportunidade que impulsione meu crescimento profissional e me permita evoluir como desenvolvedora, contribuindo com soluções eficientes, escaláveis e inovadoras.
        </h2>
      </div>
    </div>
  );
};

export default PerfilSection;