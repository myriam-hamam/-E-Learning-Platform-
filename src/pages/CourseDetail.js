import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Interactive States
  const [activeTab, setActiveTab] = useState('curriculum');
  const [videoProgress, setVideoProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // Simulating the "Content Delivery & Tracking Engine"
  useEffect(() => {
    let interval;
    if (isPlaying && videoProgress < 100) {
      interval = setInterval(() => {
        setVideoProgress(prev => Math.min(prev + 5, 100));
      }, 1000);
    } else if (videoProgress === 100) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, videoProgress]);

  const handlePaymentSimulation = () => {
    setShowCheckout(false);
    alert('💳 Stripe Gateway: Payment Processed Successfully!\n🎓 Certificate Engine unlocked.');
    navigate('/dashboard');
  };

  return (
    <div>
      <button 
        onClick={() => navigate('/')} 
        style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', marginBottom: '20px', fontWeight: 'bold' }}>
        ← Return to Catalog
      </button>

      <div className="dashboard-card" style={{ padding: '0', overflow: 'hidden' }}>
        
        {/* Simulating Video Streaming Engine */}
        <div style={{ position: 'relative', height: '450px', backgroundColor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: 'white', opacity: isPlaying ? 0.2 : 1, transition: '0.3s' }}>
            Module 1: Enterprise Architecture
          </h2>
          
          {!isPlaying && videoProgress < 100 && (
            <button onClick={() => setIsPlaying(true)} style={{ marginTop: '20px', width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--accent-blue)', color: 'white', fontSize: '30px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ▶
            </button>
          )}
          
          {videoProgress === 100 && (
            <div style={{ color: 'var(--accent-green)', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
              ✓ Module Completed
            </div>
          )}

          {/* Telemetry Progress Bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '8px', backgroundColor: '#333' }}>
            <div style={{ height: '100%', width: `${videoProgress}%`, backgroundColor: 'var(--accent-blue)', transition: 'width 1s linear' }}></div>
          </div>
        </div>

        {/* Content Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
          <button className={`tab-btn ${activeTab === 'curriculum' ? 'active-tab' : ''}`} onClick={() => setActiveTab('curriculum')}>📚 Curriculum</button>
          <button className={`tab-btn ${activeTab === 'assessment' ? 'active-tab' : ''}`} onClick={() => setActiveTab('assessment')}>📝 Live Assessment</button>
          <button className={`tab-btn ${activeTab === 'notes' ? 'active-tab' : ''}`} onClick={() => setActiveTab('notes')}>📓 My Notes</button>
        </div>

        <div style={{ padding: '40px' }}>
          {/* CURRICULUM TAB */}
          {activeTab === 'curriculum' && (
            <div>
              <h3 style={{ marginTop: 0 }}>Course Syllabus</h3>
              <ul className="syllabus-preview" style={{ fontSize: '16px' }}>
                <li style={{ color: 'var(--accent-green)' }}>▶ 1.1 Introduction to Scalable Systems (Completed)</li>
                <li style={{ color: 'var(--accent-blue)' }}>▶ 1.2 Enterprise Architecture (Current)</li>
                <li>🔒 1.3 Database Telemetry (Locked)</li>
                <li>🔒 1.4 Final Capstone Project (Locked)</li>
              </ul>
            </div>
          )}

          {/* ASSESSMENT TAB (Simulating Quiz Engine) */}
          {activeTab === 'assessment' && (
            <div>
              <h3 style={{ marginTop: 0 }}>Module 1 Knowledge Check</h3>
              <div style={{ backgroundColor: 'var(--bg-primary)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <p style={{ fontWeight: 'bold' }}>Question 1: What is the primary purpose of a CDN in e-learning?</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                  <label><input type="radio" name="q1" /> A) To style CSS pages</label>
                  <label><input type="radio" name="q1" /> B) To route localized media efficiently to end-users</label>
                  <label><input type="radio" name="q1" /> C) To hack databases</label>
                </div>
                <button className="action-btn" style={{ marginTop: '20px' }} onClick={() => alert('Assessment Graded! Score: 100%')}>Submit Answers</button>
              </div>
            </div>
          )}

          {/* NOTES TAB */}
          {activeTab === 'notes' && (
            <div>
              <h3 style={{ marginTop: 0 }}>Secure Note Taking</h3>
              <textarea 
                placeholder="Type your notes here. They will automatically sync to your cloud profile..." 
                style={{ width: '100%', height: '150px', padding: '15px', borderRadius: '12px', backgroundColor: 'var(--bg-primary)', color: 'var(--text-main)', border: '1px solid var(--border-color)', resize: 'none' }}
              />
            </div>
          )}

          {/* Commerce Gateway Trigger */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0' }}>Unlock Full Lifetime Access</h3>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>Required to access locked modules and certificates.</p>
            </div>
            <button className="action-btn" onClick={() => setShowCheckout(true)} style={{ padding: '16px 32px', fontSize: '16px', backgroundColor: 'var(--accent-green)' }}>
              Proceed to Secure Checkout
            </button>
          </div>
        </div>
      </div>

      {/* SECURE CHECKOUT MODAL SIMULATION */}
      {showCheckout && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="login-wrapper" style={{ margin: 0, width: '100%', maxWidth: '400px' }}>
            <h2 style={{ textAlign: 'center', marginTop: 0 }}>Secure Gateway</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Powered by Stripe API Simulation</p>
            
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label>Card Number</label>
              <input type="text" placeholder="•••• •••• •••• 4242" readOnly style={{ backgroundColor: 'var(--bg-primary)' }}/>
            </div>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Expiry</label>
                <input type="text" placeholder="12/26" readOnly />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>CVC</label>
                <input type="text" placeholder="•••" readOnly />
              </div>
            </div>

            <button className="action-btn" onClick={handlePaymentSimulation} style={{ width: '100%', backgroundColor: 'var(--accent-green)', padding: '15px' }}>
              Pay $199.99
            </button>
            <button onClick={() => setShowCheckout(false)} style={{ width: '100%', background: 'none', border: 'none', color: 'var(--text-muted)', marginTop: '15px', cursor: 'pointer' }}>
              Cancel Transaction
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;