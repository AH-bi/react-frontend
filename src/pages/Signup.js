import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, password, nom, prenom);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>User Name:</label>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
      />

      <label>First Name:</label>
      <input
        type="text"
        onChange={(e) => setPrenom(e.target.value)}
        value={prenom}
      />

      <label>Last Name:</label>
      <input
        type="text"
        onChange={(e) => setNom(e.target.value)}
        value={nom}
      />


      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />


     
      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
