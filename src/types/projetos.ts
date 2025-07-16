export interface Projeto {
  id: number;
  titulo: string;
  tecnologias: string[];
  descricao: string;
  imagem: string;
  linkGithub?: string;
  linkDeploy?: string;
  linkAcessar?: string; 
}

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Voluntariado Back-End",
    tecnologias: ["JAVA", "SPRING BOOT", "POSTGRESSQL", "JUNIT 5"],
    descricao: "Este sistema foi criado para combater a solidão e o isolamento social de idosos, incentivando o voluntariado e promovendo conexões entre gerações.",
    imagem: "/src/assets/voluntariado.jpg",
    linkGithub: "https://github.com/sylviavitoria/Back-ProjetoVolunt-rio",
  },
  {
    id: 2,
    titulo: "Voluntariado Front-End",
    tecnologias: ["REACT", "TYPESCRIPT"],
    descricao: "Este sistema foi criado para combater a solidão e o isolamento social de idosos, incentivando o voluntariado e promovendo conexões entre gerações.",
    imagem: "/src/assets/voluntariado.jpg",
    linkGithub: "https://github.com/sylviavitoria/Front-ProjetoVoluntario-",
  },
  {
    id: 3,
    titulo: "Agile Life",
    tecnologias: ["JAVA", "SPRING BOOT","REACT", "TYPESCRIPT", "JEST/JUNIT 5", "DOCKER"],
    descricao: "Agile Life é um jogo corporativo onde participantes assumem papéis, enfrentam desafios e concluem tarefas antes que o prazo, o café ou a paciência do cliente acabem.",
    imagem: "/src/assets/agilelife.png",
    linkDeploy: "https://main-agile-life-web.onrender.com/",
  },
  {
    id: 4,
    titulo: "Desafio Naruto",
    tecnologias: ["JAVA", "SPRING BOOT", "SPRING SECURITY", "POSTGRESSQL", "JUNIT","DOCKER"],
    descricao: "Este projeto consiste em uma aplicação Java sobre os conceitos de Programação Orientada a Objetos(POO) pelo anime Naruto, na criação de uma API utilizando Spring Boot, que permite realizar um CRUD de personagens.",
    imagem: "/src/assets/desafioNaruto.png",
    linkGithub: "https://github.com/sylviavitoria/DesafioNaruto"
  },
  {
    id: 5,
    titulo: "Blog Pets Back-End",
    tecnologias: ["JAVA", "SPRING BOOT", "JUNIT 5", "POSTGRESSQL","JUNIT", "DOCKER"],
    descricao: "MundoPet é uma API REST que gerencia posts sobre pets, servindo de backend para plataformas voltadas a amantes de animais.",
    imagem: "/src/assets/blogPets.png",
    linkGithub: "https://github.com/sylviavitoria/back-blog-pets",
  },
  {
    id: 6,
    titulo: "Blog Pets Front-End",
    tecnologias: ["REACT", "TYPESCRIPT", "JEST"],
    descricao: "MundoPet é uma aplicação front-end que se conecta à API REST para gerenciar posts sobre pets, oferecendo uma interface amigável para os amantes de animais.",
    imagem: "/src/assets/blogPets.png",
    linkGithub: "https://github.com/sylviavitoria/Blog-pets",
  },
  {
    id: 7,
    titulo: "Votação Back-End",
    tecnologias: ["JAVA", "SPRING BOOT", "POSTGRESSQL", "JUNIT","DOCKER"],
    descricao: "No cooperativismo, cada associado tem um voto e as decisões são tomadas em assembleias. Esta solução web gerencia votações via API REST.",
    imagem: "/src/assets/votacao.png",
    linkGithub: "https://github.com/sylviavitoria/desafio-votacao",
  },
  {
    id: 8,
    titulo: "Votação Front-End",
    tecnologias: ["REACT", "TYPESCRIPT", "JEST"],
    descricao: "Projeto front-end conectado à API REST, oferecendo interface simples para gerenciar votações cooperativas.",
    imagem: "/src/assets/votacao.png",
    linkGithub: "https://github.com/sylviavitoria/desafio-votacao-front"
  },
  {
    id: 9,
    titulo: "Shopping List App",
    tecnologias: ["REACT NATIVE", "FIREBASE", "TYPESCRIPT", "JEST"],
    descricao: "Um aplicativo mobile de lista de compras desenvolvido com React Native e Expo, com sincronização em tempo real via Firebase Firestore.",
    imagem: "/src/assets/shoppingListApp.png",
    linkGithub: "https://github.com/sylviavitoria/shopping-list-app"
  },
];