import { useState } from "react";
import styles from "./AuthPage.module.css";
import LoginForm from "../../component/LogInForm/LoginForm";
import SignUpForm from "../../component/SignUpForm/SignUpForm";
import Logo from "../../component/Logo/Logo";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "SIGN UP" : "LOG IN"}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
