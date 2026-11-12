import { useState } from "react";

const SignUp = ({ setRegisteredUser, setShowSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("Use at least 8 characters for this demo password.");
      return;
    }
    setRegisteredUser({ name: name.trim(), email: email.trim(), password });
    setShowSignUp(false);
  };

  return (
    <div>
      <p className="eyebrow">GET STARTED</p>
      <h1>Create account</h1>
      <p className="subtitle">Set up a temporary demo profile.</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="signup-name">Full name</label>
          <input id="signup-name" type="text" autoComplete="name" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="signup-email">Email address</label>
          <input id="signup-email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" autoComplete="new-password" minLength={8} placeholder="At least 8 characters" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        {error && <p className="error-message" role="alert">{error}</p>}
        <button type="submit">Create account <span aria-hidden="true">→</span></button>
      </form>
      <p className="switch-mode">Already registered? <button className="text-button" type="button" onClick={() => setShowSignUp(false)}>Sign in</button></p>
    </div>
  );
};

export default SignUp;
