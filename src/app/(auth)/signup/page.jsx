'use client'

import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./signup.module.css";

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const users = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: users.name,
      email: users.email,
      password: users.password,
      image: users.url,
    });

    setLoading(false);
    if (data) {
      toast.success('Account created! Welcome aboard 🎉');
      router.push('/login');
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
      <div className={`${styles.floatIcon} ${styles.fi1}`}>🏔️</div>
      <div className={`${styles.floatIcon} ${styles.fi2}`}>🌊</div>
      <div className={`${styles.floatIcon} ${styles.fi3}`}>🌴</div>
      <div className={`${styles.floatIcon} ${styles.fi4}`}>✈️</div>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Link href="/" className={styles.brand}>
            <span>✈️</span>
            <span className={styles.brandName}>WanderLust</span>
          </Link>
          <p className={styles.tagline}>Join 2M+ adventurers worldwide</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardGlow} />
          <div className={styles.cardInner}>
            {/* Left decorative */}
            <div className={styles.deco}>
              <h3 className={styles.decoTitle}>Start Your Journey</h3>
              <p className={styles.decoText}>
                Explore the world&apos;s most beautiful destinations with personalized travel experiences.
              </p>
              <div className={styles.decoFeatures}>
                <div className={styles.decoFeat}>✅ Free to join</div>
                <div className={styles.decoFeat}>✅ Curated destinations</div>
                <div className={styles.decoFeat}>✅ Community of explorers</div>
                <div className={styles.decoFeat}>✅ Trip planning tools</div>
              </div>
            </div>

            {/* Form area */}
            <div className={styles.formArea}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Create Account</h2>
                <p className={styles.formSub}>Fill in your details to get started</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <div className={styles.inputWrap}>
                    <span className={styles.icon}>👤</span>
                    <input name="name" type="text" required placeholder="John Doe" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Profile Image URL <span className={styles.optional}>(optional)</span>
                  </label>
                  <div className={styles.inputWrap}>
                    <span className={styles.icon}>🖼️</span>
                    <input name="url" type="url" placeholder="https://example.com/photo.jpg" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <div className={styles.inputWrap}>
                    <span className={styles.icon}>📧</span>
                    <input name="email" type="email" required placeholder="john@example.com" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Password</label>
                  <div className={styles.inputWrap}>
                    <span className={styles.icon}>🔒</span>
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={8}
                      placeholder="Min. 8 chars, 1 uppercase, 1 number"
                      className={styles.input}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.eyeBtn}>
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                  <p className={styles.hint}>Must be 8+ characters with uppercase & number</p>
                </div>

                <label className={styles.terms}>
                  <input type="checkbox" required />
                  <span>
                    I agree to the <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>
                  </span>
                </label>

                <button type="submit" disabled={loading} className={styles.btnPrimary}>
                  {loading ? (
                    <span className={styles.btnLoading}>
                      <span className={styles.spinner} /> Creating account...
                    </span>
                  ) : "🚀 Create My Account"}
                </button>
              </form>

              <p className={styles.loginLink}>
                Already have an account?{" "}
                <Link href="/login" className={styles.linkBold}>Sign in →</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;