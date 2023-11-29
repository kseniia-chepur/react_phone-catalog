import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { Icons } from '../../assets/icons';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
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
      <div className="header__service-icons service-icons">
        <Link to="/"><Icons.Farourites /></Link>
        <Link to="/"><Icons.Cart /></Link>

      </div>
    </header>
  );
};
