'use client'

import { authClient } from "@/app/lib/auth-client";
import SoscalLoginPage from "@/components/SoscalLoginPage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./login.module.css";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const users = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: users.email,
      password: users.password,
    });

    setLoading(false);
    if (data) {
      toast.success('Login successful');
      router.push('/');
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      <div className={styles.container}>
        {/* Left panel */}
        <div className={styles.leftPanel}>
          <div className={styles.brand}>
            <span className={styles.brandIcon}>✈️</span>
            <span className={styles.brandName}>WanderLust</span>
          </div>
          <h1 className={styles.headline}>
            Your Next<br />
            <span className={styles.gradientText}>Adventure</span><br />
            Awaits
          </h1>
          <p className={styles.subtext}>
            Sign in to discover breathtaking destinations, plan your trips, and create memories that last a lifetime.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Destinations</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2M+</span>
              <span className={styles.statLabel}>Travelers</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4.9★</span>
              <span className={styles.statLabel}>Rating</span>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className={styles.rightPanel}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Welcome Back</h2>
              <p className={styles.cardSub}>Sign in to continue your journey</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>📧</span>
                  <input name="email" type="email" required placeholder="john@example.com" className={styles.formInput} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Password</label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>🔒</span>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    placeholder="Enter your password"
                    className={styles.formInput}
                  />
                  <button type="button" className={styles.passwordToggle} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <div className={styles.footerRow}>
                <label className={styles.rememberMe}>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className={styles.forgotLink}>Forgot password?</a>
              </div>

              <button type="submit" className={styles.btnPrimary} disabled={loading}>
                {loading ? (
                  <span className={styles.btnLoading}>
                    <span className={styles.spinner} /> Signing in...
                  </span>
                ) : "✈️ Sign In"}
              </button>
            </form>

            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerText}>or continue with</span>
              <span className={styles.dividerLine} />
            </div>

            <SoscalLoginPage />

            <p className={styles.signupLink}>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className={styles.linkAccent}>Create account →</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;