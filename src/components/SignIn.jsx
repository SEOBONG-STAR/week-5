import { useState } from "react";

const SignIn = ({ registeredUser, setIsAuthenticated, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (!registeredUser) {
      setError("No demo account yet. Create an account first.");
      return;
    }
    if (registeredUser.email.toLowerCase() === email.trim().toLowerCase() && registeredUser.password === password) {
      setIsAuthenticated(true);
    } else {
      setError("Email or password does not match this demo session.");
    }
  };

  return (
    <div>
      <p className="eyebrow">WELCOME BACK</p>
      <h1>Sign in</h1>
      <p className="subtitle">Continue to your workspace.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="signin-email">Email address</label>
          <input id="signin-email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => { setEmail(event.target.value); setError(""); }} required />
        </div>
        <div className="input-group">
          <label htmlFor="signin-password">Password</label>
          <input id="signin-password" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => { setPassword(event.target.value); setError(""); }} required />
        </div>
        {error && <p className="error-message" role="alert">{error}</p>}
        <button type="submit">Sign in <span aria-hidden="true">→</span></button>
      </form>
      <p className="switch-mode">New here? <button className="text-button" type="button" onClick={() => setShowSignUp(true)}>Create an account</button></p>
    </div>
  );
};

export default SignIn;
