import logo from '../assets/logo-db-dark-blue.png';
import github from '../assets/Button.png';
import linkedin from '../assets/Frame1.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="https://www.db.tec.br/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo DB" className="logo" />
        </a>
      </div>

      <ul className="navbar-center">
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Currículo</a></li>
        <li><a href="#">Projetos</a></li>
      </ul>

      <div className="navbar-right">
        <a href="https://github.com/sylviavitoria" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/sylviavitoria/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;