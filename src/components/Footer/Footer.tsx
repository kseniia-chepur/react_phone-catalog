import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';
import { Icons } from '../../assets/icons';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Link to="/" className="logo__link"><Icons.Logo /></Link>
      <nav className="footer__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/github" className="nav__link">
              Github
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contacts" className="nav__link">
              Contacts
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/rights" className="nav__link">
              Rights
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="footer__back-to-top">
        <a href="#back-to-top" className="footer__back-to-top-link">
          Back to top
        </a>
        <a href="#back-to-top"><Icons.BackToTop /></a>
      </div>
    </footer>

  );
};
