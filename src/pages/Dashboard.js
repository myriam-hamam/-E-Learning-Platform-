import React from 'react';

const trackingModules = [
  { id: 1, title: 'Software Project Management', code: 'SE-302', progress: 75, status: 'In Progress', color: '#38bdf8' },
  { id: 2, title: 'Advanced Full-Stack Architectures', code: 'CS-409', progress: 100, status: 'Completed', color: '#10b981' }
];

function Dashboard() {
  return (
    <div>
      <h1 className="page-title">Student Hub Terminal</h1>
      <p className="page-subtitle">Real-time status updates and delivery monitoring of active instructional tracks.</p>

      <div style={{ maxWidth: '800px' }}>
        {trackingModules.map(module => (
          <div key={module.id} className="dashboard-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 'bold' }}>{module.code}</span>
                <h3 style={{ margin: '4px 0 0 0', fontSize: '20px' }}>{module.title}</h3>
              </div>
              <span style={{ 
                padding: '6px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                fontWeight: 'bold',
                backgroundColor: module.progress === 100 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(56, 189, 248, 0.1)',
                color: module.progress === 100 ? '#10b981' : '#38bdf8'
              }}>
                {module.status}
              </span>
            </div>

            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${module.progress}%`, backgroundColor: module.color }}
              />
            </div>

            <div className="stat-row">
              <span>Curriculum Completion Rate</span>
              <strong style={{ color: module.color }}>{module.progress}%</strong>
            </div>

            {module.progress === 100 ? (
              <button className="action-btn" style={{ backgroundColor: '#10b981' }}>
                Download Signed Accreditation Certificate
              </button>
            ) : (
              <button className="action-btn" style={{ background: 'transparent', border: '1px solid #475569', color: '#f8fafc' }}>
                Launch Virtual Lecture Terminal
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;