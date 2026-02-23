import { useState } from "react";

const SignUp = ({ setRegisteredUser, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.includes("@") && password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };
    setRegisteredUser(user);
    localStorage.setItem("registeredUser", JSON.stringify(user));

    setShowSignUp(false); // go to SignIn
  };

  return (
    <div>
      <h2>Create Account</h2>
      <p className="subtitle">Join us to explore amazing features</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={!isValid}>
          Register
        </button>
      </form>

      <p className="switch-mode">
        Already have an account? <span onClick={() => setShowSignUp(false)}>Sign In</span>
      </p>
    </div>
  );
};

export default SignUp;
