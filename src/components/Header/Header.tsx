import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { Icons } from '../../assets/icons';

export const Header: React.FC = () => {
  return (
    <header className="header" id="back-to-top">
      <div className="header__left-side-content">
        <Link to="/" className="logo__link"><Icons.Logo /></Link>
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/phones" className="nav__link">
                Phones
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/tablets" className="nav__link">
                Tablets
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/accessories" className="nav__link">
                Accessories
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
      <div className="header__service-icons">
        <div className="header__service-icons-content">
          <Link to="/"><Icons.Farourites /></Link>
        </div>
        <div className="header__service-icons-content">
          <Link to="/"><Icons.Cart /></Link>
        </div>
      </div>
    </header>
  );
};
