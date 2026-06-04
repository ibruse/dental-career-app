import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Layout() {
  const { logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-layout">
      {/* Hamburger button - visible only on mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Overlay for mobile - closes menu when tapped */}
      <div 
        className={`sidebar-overlay ${menuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      />

      {/* Sidebar */}
      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h3>🦷 Dental Career</h3>
        <ul>
          <li>
            <span className="country-title">🇩🇪 Germany</span>
            <ul className="submenu">
              <li><Link to="/germany/work" onClick={closeMenu}>💼 Work</Link></li>
              <li><Link to="/germany/education" onClick={closeMenu}>🎓 Education</Link></li>
            </ul>
          </li>
          <li>
            <span className="country-title">🇦🇺 Australia</span>
            <ul className="submenu">
              <li><Link to="/australia/work" onClick={closeMenu}>💼 Work</Link></li>
              <li><Link to="/australia/education" onClick={closeMenu}>🎓 Education</Link></li>
            </ul>
          </li>
          <li className="clinics-link">
            <Link to="/clinics-trivandrum" onClick={closeMenu}>🏥 Clinics in Trivandrum</Link>
          </li>
        </ul>
        <button className="logout-btn" onClick={logout}>🚪 Logout</button>
      </nav>

      {/* Main content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
