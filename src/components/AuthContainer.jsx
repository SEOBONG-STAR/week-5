import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

const AuthContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className="auth-shell">
      <header className="brand">
        <span className="brand-mark">A</span>
        <div><strong>Access UI</strong><span>React authentication demo</span></div>
      </header>
      <section className="glass-container">
        {isAuthenticated ? (
          <Dashboard setIsAuthenticated={setIsAuthenticated} user={registeredUser} />
        ) : showSignUp ? (
          <SignUp setRegisteredUser={setRegisteredUser} setShowSignUp={setShowSignUp} />
        ) : (
          <SignIn registeredUser={registeredUser} setIsAuthenticated={setIsAuthenticated} setShowSignUp={setShowSignUp} />
        )}
      </section>
      <p className="security-note">Demo only · Account data stays in memory and is cleared on refresh.</p>
    </main>
  );
};

export default AuthContainer;
