import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email for password reset:", email);
    // Simulate API call for email verification
    // After successful email verification, navigate to the Reset Password page
    navigate("/reset-password");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Forgot Password</h2>
        <p style={styles.instructions}>
          Enter your email address, and we'll send you a link to reset your password.
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Send Reset Link
        </button>

        <p style={styles.backText}>
          Remembered your password?{" "}
          <a href="/" style={styles.link}>
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  instructions: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#666",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  backText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#666",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default ForgotPassword;
