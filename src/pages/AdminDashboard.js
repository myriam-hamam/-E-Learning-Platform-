import React from 'react';

function AdminDashboard({ userRole }) {
  return (
    <div>
      <h1 className="page-title">
        {userRole === 'admin' ? 'Super Admin Terminal' : 'Doctor / Instructor Portal'}
      </h1>
      <p className="page-subtitle">
        {userRole === 'admin' 
          ? 'Full system override. Manage all students, doctors, and financial data.' 
          : 'Manage your courses, edit curriculum, and grade your students.'}
      </p>

      {/* Analytics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div className="dashboard-card" style={{ marginBottom: 0, textAlign: 'center' }}>
          <h3 style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 10px 0' }}>Total Enrolled</h3>
          <p style={{ fontSize: '32px', margin: 0, fontWeight: '800', color: '#38bdf8' }}>1,248</p>
        </div>
        <div className="dashboard-card" style={{ marginBottom: 0, textAlign: 'center' }}>
          <h3 style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 10px 0' }}>Pending Grades</h3>
          <p style={{ fontSize: '32px', margin: 0, fontWeight: '800', color: '#a855f7' }}>42</p>
        </div>
      </div>

      {/* Logic Controls */}
      <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Course & Student Management</h2>
      <div className="dashboard-card" style={{ padding: '0', overflow: 'hidden' }}>
        
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <div>
            <strong>Software Project Management</strong>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '5px' }}>84 Students Enrolled</div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="action-btn" onClick={() => alert('Opening Gradebook Simulator...')} style={{ backgroundColor: 'var(--accent-purple)', padding: '8px 16px' }}>Grade Students</button>
            <button className="action-btn" onClick={() => alert('Opening Course Editor...')} style={{ backgroundColor: 'var(--accent-blue)', padding: '8px 16px' }}>Edit Course</button>
            {userRole === 'admin' && (
              <button className="action-btn" onClick={() => alert('Course Deleted from Database')} style={{ backgroundColor: '#ef4444', padding: '8px 16px' }}>Delete</button>
            )}
          </div>
        </div>

        <div style={{ padding: '20px', backgroundColor: 'var(--bg-primary)' }}>
          <button className="action-btn" onClick={() => alert('Opening Course Creator...')} style={{ width: '100%', backgroundColor: 'transparent', border: '1px dashed var(--accent-blue)', color: 'var(--accent-blue)' }}>
            + Create New Course
          </button>
        </div>
      </div>

      {/* Admin Only Section */}
      {userRole === 'admin' && (
        <div className="dashboard-card" style={{ marginTop: '30px', border: '1px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444', marginTop: 0 }}>Admin Override Controls</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Suspend user accounts, audit instructor payouts, and modify system database configurations.</p>
          <button className="action-btn" style={{ backgroundColor: '#ef4444' }} onClick={() => alert('System settings locked for demo.')}>Access Core Database</button>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;