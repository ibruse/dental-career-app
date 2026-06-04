import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Layout() {
  const { logout } = useAuth();

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: 220, background: '#f4f4f4', padding: 20, minHeight: '100vh' }}>
        <h3>Dental Career App</h3>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li>
            <strong>Germany</strong>
            <ul>
              <li><Link to="/germany/work">Work</Link></li>
              <li><Link to="/germany/education">Education</Link></li>
            </ul>
          </li>
          <li>
            <strong>Australia</strong>
            <ul>
              <li><Link to="/australia/work">Work</Link></li>
              <li><Link to="/australia/education">Education</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/clinics-trivandrum">Clinics in Trivandrum</Link>
          </li>
        </ul>
        <button onClick={logout} style={{ marginTop: 20 }}>Logout</button>
      </nav>

      <main style={{ flex: 1, padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
