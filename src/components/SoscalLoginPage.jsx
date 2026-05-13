import { authClient } from '@/app/lib/auth-client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import styles from './SoscalLoginPage.module.css';

const SoscalLoginPage = () => {
  const router = useRouter();
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const handleGoogleSign = async () => {
    setLoadingGoogle(true);
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    });

    setLoadingGoogle(false);
    if (data) {
      toast.success('Google login successful');
      router.push('/');
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.wrap}>
      <button onClick={handleGoogleSign} disabled={loadingGoogle} className={styles.btn}>
        {loadingGoogle ? (
          <>
            <span className={styles.spinner} />
            <span>Connecting...</span>
          </>
        ) : (
          <>
            <img src="https://www.google.com/favicon.ico" alt="Google" className={styles.logo} />
            <span>Continue with Google</span>
          </>
        )}
      </button>
    </div>
  );
};

export default SoscalLoginPage;