import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage({ isDarkMode, setIsDarkMode }) {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-main)', overflowX: 'hidden' }}>
      
      {/* Marketing Navbar (Now with Glassmorphism) */}
      <nav className="landing-navbar">
        <div style={{ fontSize: '24px', fontWeight: '800', background: 'linear-gradient(to right, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', transition: 'transform 0.3s ease', cursor: 'pointer' }}
             onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
             onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
          🎓 E-Learning Platform
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button className="theme-toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)} style={{ width: 'auto', padding: '10px 20px' }}>
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button className="login-btn" onClick={() => navigate('/login')} style={{ padding: '10px 24px' }}>
            Portal Login
          </button>
        </div>
      </nav>

      {/* Hero Section (Now with staggered fade-in animations) */}
      <header className="landing-hero">
        <h3 className="animate-fade-in" style={{ color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
          Next-Generation Learning Management System
        </h3>
        
        <h1 className="hero-title animate-fade-in delay-1">
          Amplify Everyone's Awesomeness.
        </h1>
        
        <p className="hero-subtitle animate-fade-in delay-2">
          Provide equitable access and instructional continuity to every student. Everywhere. Every day. 
          All in a simple, intuitive interface bridging the gap between educators, students, and administrators.
        </p>
        
        <div className="hero-buttons animate-fade-in delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button className="action-btn" onClick={() => navigate('/login')} style={{ padding: '18px 40px', fontSize: '18px', borderRadius: '12px' }}>
            Get Started Now
          </button>
          <button className="action-btn" onClick={() => alert('Demo Request Sent!')} style={{ padding: '18px 40px', fontSize: '18px', borderRadius: '12px', backgroundColor: 'transparent', color: 'var(--text-main)', border: '1px solid var(--border-color)' }}>
            Request a Demo
          </button>
        </div>
      </header>

      {/* Feature Case Studies (Now with hover lift & glow) */}
      <section className="feature-grid">
        <div className="feature-card animate-fade-in delay-1">
          <div style={{ fontSize: '48px', margin: '0 0 15px 0', background: 'rgba(56, 189, 248, 0.1)', display: 'inline-block', padding: '15px', borderRadius: '20px' }}>🧑‍🎓</div>
          <h3>For Students</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Engaging, distraction-free learning environments with live assessments, grade tracking, and certified cloud credentials.</p>
        </div>
        
        <div className="feature-card animate-fade-in delay-2">
          <div style={{ fontSize: '48px', margin: '0 0 15px 0', background: 'rgba(168, 85, 247, 0.1)', display: 'inline-block', padding: '15px', borderRadius: '20px' }}>👨‍🏫</div>
          <h3>For Educators</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Powerful curriculum builders, automated grading matrices, and real-time student telematics all in one dashboard.</p>
        </div>
        
        <div className="feature-card animate-fade-in delay-3">
          <div style={{ fontSize: '48px', margin: '0 0 15px 0', background: 'rgba(16, 185, 129, 0.1)', display: 'inline-block', padding: '15px', borderRadius: '20px' }}>⚙️</div>
          <h3>For Administrators</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Enterprise-grade database controls, role-based access logic, and system-wide financial analytics.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="animate-fade-in delay-3" style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', marginTop: '40px' }}>
        <p>© 2026 E-Learning Platform, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;