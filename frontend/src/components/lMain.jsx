import React from 'react';

function Lmain() {
  return (
    <div className="lmain-container">
      <header className="lmain-header">
        <h1 className="lmain-title">Welcome, Laundry Partner!</h1>
      </header>
      
      <main className="lmain-content">
        <section className="lmain-overview">
          <h2 className="section-title">Dashboard Overview</h2>
          <p>Here you can manage your orders, update your profile, and check your earnings.</p>
        </section>
        
        <section className="lmain-actions">
          <div className="action-card">
            <h3>Manage Orders</h3>
            <p>View and manage your current laundry orders.</p>
            <button className="action-button">Go to Orders</button>
          </div>
          <div className="action-card">
            <h3>Update Profile</h3>
            <p>Update your personal information and business details.</p>
            <button className="action-button">Edit Profile</button>
          </div>
          <div className="action-card">
            <h3>View Earnings</h3>
            <p>Check your total earnings and transaction history.</p>
            <button className="action-button">View Earnings</button>
          </div>
        </section>
      </main>
      
      <footer className="lmain-footer">
        <p>&copy; 2024 Laundry Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Lmain;
