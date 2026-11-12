const Dashboard = ({ setIsAuthenticated, user }) => (
  <div className="dashboard-card">
    <div className="dashboard-icon" aria-hidden="true">✓</div>
    <p className="eyebrow">AUTHENTICATION DEMO</p>
    <h1>{user?.name ? "You're signed in, " + user.name.split(" ")[0] + "." : "You're signed in."}</h1>
    <p className="subtitle">Your temporary session is active in this browser tab.</p>
    {user?.email && <p className="account-chip">{user.email}</p>}
    <button type="button" onClick={() => setIsAuthenticated(false)}>Sign out</button>
  </div>
);

export default Dashboard;
