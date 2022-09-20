import NavLink from './components/navlink';
import { NavItems } from './data';
import styles from './header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <h2>Nextjs Template</h2>
          <nav>
            <ul>
              {NavItems.map((navItem) => (
                <li key={navItem.id}>
                  <NavLink exact={navItem.exact} href={navItem.path}>
                    {navItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
