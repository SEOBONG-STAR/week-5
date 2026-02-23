const Dashboard = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="dashboard-card">
      <div className="dashboard-icon">✨</div>
      <h2>Dashboard</h2>
      <p className="subtitle">You have successfully logged in.</p>

      <button onClick={handleLogout} style={{ marginTop: '1.5rem' }}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;