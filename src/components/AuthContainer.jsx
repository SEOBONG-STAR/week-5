import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

const AuthContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="glass-container">
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : showSignUp ? (
        <SignUp
          setRegisteredUser={setRegisteredUser}
          setShowSignUp={setShowSignUp}
        />
      ) : (
        <SignIn
          registeredUser={registeredUser}
          setIsAuthenticated={setIsAuthenticated}
          setShowSignUp={setShowSignUp}
        />
      )}
    </div>
  );
};

export default AuthContainer;
