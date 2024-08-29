import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('dhruvmulay10@gmail.com');
  const [password, setPassword] = useState('1234567890');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsTransitioning(true);

    // Simulate an API call or login processing
    setTimeout(() => {
      console.log('Login attempted with username:', username, 'and password:', password);
      setIsTransitioning(false);
    }, 2000); // Adjust the timeout to match the duration of the transition
  };

  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 10; i++) {
      const size = Math.random() * 60;
      const left = Math.random() * window.innerWidth;
      bubbles.push(<span key={i} style={{ width: `${20 + size}px`, height: `${20 + size}px`, left: `${left}px` }}></span>);
    }
    return bubbles;
  };

  return (
    <div className={`login-container ${isTransitioning ? 'transitioning' : ''}`}>
      {isTransitioning && <div className="bubble-container">{createBubbles()}</div>}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
