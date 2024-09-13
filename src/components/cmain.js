import React from 'react';

function Cmain() {
  return (
    <div className="cmain-container">
      <header className="cmain-header">
        <h1 className="cmain-title">Welcome, Valued Customer!</h1>
      </header>
      
      <main className="cmain-content">
        <section className="cmain-overview">
          <h2 className="section-title">Dashboard Overview</h2>
          <p>Here you can view your orders, update your profile, and track your laundry status.</p>
        </section>
        
        <section className="cmain-actions">
          <div className="action-card">
            <h3>Track Orders</h3>
            <p>Track the status of your laundry orders.</p>
            <button className="action-button">Track Orders</button>
          </div>
          <div className="action-card">
            <h3>Update Profile</h3>
            <p>Update your personal information and preferences.</p>
            <button className="action-button">Edit Profile</button>
          </div>
          <div className="action-card">
            <h3>View Order History</h3>
            <p>Check your past orders and their details.</p>
            <button className="action-button">Order History</button>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default Cmain;
