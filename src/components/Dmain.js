import React from 'react';

function Dmain() {
  return (
    <div className="dmain-container">
      <header className="dmain-header">
        <h1 className="dmain-title">Welcome, Delivery Partner!</h1>
      </header>
      
      <main className="dmain-content">
        <section className="dmain-overview">
          <h2 className="section-title">Dashboard Overview</h2>
          <p>Manage your delivery tasks, update your profile, and check your earnings.</p>
        </section>
        
        <section className="dmain-actions">
          <div className="action-card">
            <h3>Manage Deliveries</h3>
            <p>View and manage your delivery tasks.</p>
            <button className="action-button">Go to Deliveries</button>
          </div>
          <div className="action-card">
            <h3>Update Profile</h3>
            <p>Update your personal information and vehicle details.</p>
            <button className="action-button">Edit Profile</button>
          </div>
          <div className="action-card">
            <h3>View Earnings</h3>
            <p>Check your total earnings and transaction history.</p>
            <button className="action-button">View Earnings</button>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default Dmain;
