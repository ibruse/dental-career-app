import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Layout() {
  const { logout } = useAuth();

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <nav className="sidebar">
        <h3>🦷 Dental Career</h3>
        <ul>
          <li>
            <span className="country-title">🇩🇪 Germany</span>
            <ul className="submenu">
              <li><Link to="/germany/work">💼 Work</Link></li>
              <li><Link to="/germany/education">🎓 Education</Link></li>
            </ul>
          </li>
          <li>
            <span className="country-title">🇦🇺 Australia</span>
            <ul className="submenu">
              <li><Link to="/australia/work">💼 Work</Link></li>
              <li><Link to="/australia/education">🎓 Education</Link></li>
            </ul>
          </li>
          <li className="clinics-link">
            <Link to="/clinics-trivandrum">🏥 Clinics in Trivandrum</Link>
          </li>
        </ul>
        <button className="logout-btn" onClick={logout}>🚪 Logout</button>
      </nav>

      {/* Main content area */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
