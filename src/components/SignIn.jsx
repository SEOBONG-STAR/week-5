import { useState } from "react";

const SignIn = ({ setIsAuthenticated, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValid = email !== "" && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setIsAuthenticated(true);
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div>
      <h2>Welcome Back</h2>
      <p className="subtitle">Sign in to continue to your account</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={!isValid}>
          Sign In
        </button>
      </form>

      <p className="switch-mode">
        Don't have an account? <span onClick={() => setShowSignUp(true)}>Sign Up</span>
      </p>
    </div>
  );
};

export default SignIn;
