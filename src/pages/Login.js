import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setRole }) {
  const navigate = useNavigate();

  const handleLogin = (selectedRole) => {
    setRole(selectedRole); 
    
    // CHANGE: Navigate students to '/catalog' instead of '/'
    if (selectedRole === 'student') navigate('/catalog');
    if (selectedRole === 'doctor') navigate('/admin');
    if (selectedRole === 'admin') navigate('/admin');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100vw', backgroundColor: 'var(--bg-primary)' }}>
      <div className="login-wrapper" style={{ margin: '0', width: '100%', maxWidth: '500px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>University Portal</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '30px' }}>
          Select your authorization level to enter the system.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button className="action-btn" onClick={() => handleLogin('student')} style={{ padding: '16px', fontSize: '16px', backgroundColor: 'var(--accent-blue)' }}>
            👨‍🎓 Login as Student
          </button>
          
          <button className="action-btn" onClick={() => handleLogin('doctor')} style={{ padding: '16px', fontSize: '16px', backgroundColor: 'var(--accent-purple)' }}>
            👨‍🏫 Login as Doctor / Instructor
          </button>
          
          <button className="action-btn" onClick={() => handleLogin('admin')} style={{ padding: '16px', fontSize: '16px', backgroundColor: 'var(--accent-green)' }}>
            ⚙️ Login as System Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;