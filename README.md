# 📁 Portfólio DB 
Este portfólio foi desenvolvido com React + TypeScript utilizando Vite, com o objetivo de apresentar informações profissionais, habilidades e projetos.

---

## 🌐 Acesse o portfólio online: https://portfoliosylviavitoria.netlify.app/


## 🚀 Funcionalidades

### 👤 Sobre  
Apresenta informações pessoais, minha jornada profissional, cargo atual e habilidades técnicas.

### 📄 Currículo  
Disponível o meu currículo em PDF na pasta pública, acessível diretamente pela Navbar.

### 💻 Projetos  
Exibição dos meus principais projetos com:  
- Título  
- Imagem de capa
- Tecnologias utilizadas
- Descrição resumida  
- Link para o GitHub ou Deploy.

### 🧭 Navbar
Navegação entre páginas, acesso ao currículo em PDF, além de ter acesso as minhas redes socias como GitHub e LinkedIn.  

### 🦶 Footer: Rodapé com logo institucional.  

---

## 🧠 Tecnologias Utilizadas

### 🖥️ Frontend

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.  
- **TypeScript:** Linguagem tipada que compila para JavaScript.  
- **Vite:** Ferramenta moderna e rápida para build frontend.  
- **React Router Dom:** Gerenciamento de rotas e navegação.  
- **CSS Customizado:** Estilização personalizada do portfólio.
- **Jest:** Framework de testes
- **Testing-library:** Testa o comportamento real do usuário

---
### 🏗️ Padrões e Arquitetura

- **Componentes:** Reutilizáveis e organizados.  
- **Pages:** Separação clara das páginas da aplicação.  
- **Design Responsivo:** Layout adaptável a diferentes tamanhos de tela e dispositivos.

---


## 📂 Estrutura do Projeto

```

├── public               # Arquivos públicos estáticos, como o currículo PDF, favicon e outras mídias acessíveis diretamente pela URL
├──src/
├─── assets/             # Imagens, logos e fontes
│
├─── components/         # Componentes React
│   │_ ─── __tests__/    # Testes para componentes
│ 
├── pages/               # Páginas/rotas da aplicação
├── types/               # Definições de tipos TypeScript
├── setupTests.ts        # Configuração global para testes
└── index.css            # Estilos globais da aplicação


```

---
## 🧪 Testes
O projeto utiliza Jest e Testing Library para testes unitários. Execute os testes com:
```bash
npm run test           # Executa todos os testes
```
---

# 🌬️ Como Executar em Modo Desenvolvimento

### 📝 Pré-requisitos

- Node.js (v18 ou superior)  
- npm ou yarn  

## Passo a passo para Execução

### 1. Clone o repositório do Front e do Back
```bash
git clone https://github.com/sylviavitoria/db-portifolio.git
cd db-portifolio

```

### 2. Instale as dependências
```bash
npm install
```
# Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

Acesse a aplicação em: [http://localhost:5173](http://localhost:5173)


---
