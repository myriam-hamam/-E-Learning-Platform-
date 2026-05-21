import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

// 1. The Dynamic Sidebar Component
function Sidebar({ userRole, setRole, isDarkMode, setIsDarkMode }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-logo">
        🎓 E-Learning Platform
      </Link>
      
      <nav className="nav-links">
        {userRole === 'student' && (
          <>
            <Link to="/catalog" className={currentPath === '/catalog' ? 'active-link' : ''}>🔍 Course Catalog</Link>
            <Link to="/dashboard" className={currentPath === '/dashboard' ? 'active-link' : ''}>📊 Student Dashboard</Link>
          </>
        )}

        {userRole === 'doctor' && (
          <>
            <Link to="/catalog" className={currentPath === '/catalog' ? 'active-link' : ''}>🔍 View Live Catalog</Link>
            <Link to="/admin" className={currentPath === '/admin' ? 'active-link' : ''}>👨‍🏫 Instructor Portal</Link>
          </>
        )}

        {userRole === 'admin' && (
          <>
            <Link to="/catalog" className={currentPath === '/catalog' ? 'active-link' : ''}>🔍 View Live Catalog</Link>
            <Link to="/admin" className={currentPath === '/admin' ? 'active-link' : ''}>⚙️ System Management</Link>
          </>
        )}
      </nav>

      <div className="sidebar-footer">
        <button className="theme-toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <button className="login-btn" onClick={() => setRole(null)} style={{ border: 'none', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    </aside>
  );
}

// 2. The Internal Content Wrapper
function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userRole, setUserRole] = useState(null); 
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // LOGIC: Only show sidebar if logged in AND not currently looking at the Landing Page
  const showSidebar = userRole && location.pathname !== '/';

  return (
    <div className="app-container">
      {showSidebar && (
        <Sidebar 
          userRole={userRole} 
          setRole={setUserRole} 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />
      )}

      <main className="main-content" style={{ marginLeft: showSidebar ? '280px' : '0', padding: showSidebar ? '50px 60px' : '0' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          
          {/* 🌟 FIX 1: Catches the GitHub Pages default loading route and redirects smoothly to the landing page */}
          <Route path="/index.html" element={<Navigate to="/" />} />
          
          <Route path="/login" element={!userRole ? <Login setRole={setUserRole} /> : <Navigate to="/catalog" />} />
          
          {/* Protected Internal Routes */}
          {userRole ? (
            <>
              <Route path="/catalog" element={<Home />} />
              <Route path="/dashboard" element={userRole === 'student' ? <Dashboard /> : <Navigate to="/admin" />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/admin" element={(userRole === 'doctor' || userRole === 'admin') ? <AdminDashboard userRole={userRole} /> : <Navigate to="/catalog" />} />
            </>
          ) : (
            /* Catch-all for non-logged in users */
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </main>
    </div>
  );
}

// 3. The Root App Component
function App() {
  return (
    /* 🌟 FIX 2: Configures the base directory path matching your GitHub URL schema exactly */
    <BrowserRouter basename="/-E-Learning-Platform-">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
