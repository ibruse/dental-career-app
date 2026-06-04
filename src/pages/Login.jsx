import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      navigate('/');
    } else {
      setError('Incorrect password. Hint: NewHope');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🦷 Dental Career App</h2>
        <p style={{ color: '#718096', marginBottom: 20, fontSize: '0.9rem' }}>
          Enter password to continue
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button type="submit">Login</button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
