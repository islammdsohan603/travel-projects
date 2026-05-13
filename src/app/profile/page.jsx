
'use client'
import React from 'react'
import { authClient } from '../lib/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import styles from './profile.module.css'

const MyProfile = () => {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession();
  const users = session?.user

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success('Signed out successfully');
    router.push('/login');
  }

  const formatDate = (date) => {
    if (!date) return 'N/A';
    try {
      return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch { return 'N/A'; }
  };

  if (isPending) {
    return (
      <div className={styles.loadingRoot}>
        <div className={styles.loadingWrap}>
          <div className={styles.loadingSpinner} />
          <p className={styles.loadingText}>Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!users) {
    return (
      <div className={styles.notLoggedRoot}>
        <div className={styles.notLoggedCard}>
          <div className={styles.nlIcon}>🔐</div>
          <h2 className={styles.nlTitle}>Not Signed In</h2>
          <p className={styles.nlText}>Please sign in to view your profile.</p>
          <Link href="/login" className={styles.nlBtn}>Go to Login →</Link>
        </div>
      </div>
    );
  }

  const avatarLetter = users?.name ? users.name.charAt(0).toUpperCase() : '?';

  return (
    <div className={styles.root}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      <div className={styles.wrapper}>
        {/* Nav */}
        <div className={styles.nav}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          <span className={styles.navBrand}>✈️ WanderLust</span>
        </div>

        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.avatarCard}>
              <div className={styles.avatarRing}>
                {users?.image ? (
                  <img src={users.image} alt={users.name} className={styles.avatarImg}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <div className={styles.avatarFallback}>{avatarLetter}</div>
                )}
              </div>

              <div className={styles.status}>
                <span className={styles.statusDot} />
                <span className={styles.statusText}>Active Traveler</span>
              </div>

              <h2 className={styles.avatarName}>{users?.name}</h2>
              <p className={styles.avatarEmail}>{users?.email}</p>

              <div className={styles.badge}>
                <span>🌍</span>
                <span>Explorer Member</span>
              </div>

              <button onClick={handleSignOut} className={styles.signoutBtn}>
                🚪 Sign Out
              </button>
            </div>

            <div className={styles.quickStats}>
              <div className={styles.qsItem}>
                <span className={styles.qsIcon}>🗺️</span>
                <div>
                  <div className={styles.qsNumber}>0</div>
                  <div className={styles.qsLabel}>Trips Planned</div>
                </div>
              </div>
              <div className={styles.qsDivider} />
              <div className={styles.qsItem}>
                <span className={styles.qsIcon}>❤️</span>
                <div>
                  <div className={styles.qsNumber}>0</div>
                  <div className={styles.qsLabel}>Saved Places</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <div className={styles.detailCard}>
              <div className={styles.detailCardHeader}>
                <h3 className={styles.detailCardTitle}><span>👤</span> Account Information</h3>
              </div>
              <div className={styles.detailRows}>
                <div className={styles.detailRow}>
                  <span className={styles.detailKey}>Full Name</span>
                  <span className={styles.detailValue}>{users?.name || 'Not set'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailKey}>Email Address</span>
                  <span className={styles.detailValue}>{users?.email || 'Not set'}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailKey}>User ID</span>
                  <span className={`${styles.detailValue} ${styles.detailMono}`}>
                    {users?.id ? `${users.id.slice(0, 8)}...` : 'N/A'}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailKey}>Last Updated</span>
                  <span className={styles.detailValue}>{formatDate(users?.updatedAt)}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailKey}>Member Since</span>
                  <span className={styles.detailValue}>{formatDate(users?.createdAt)}</span>
                </div>
              </div>
            </div>

            <div className={styles.exploreCard}>
              <div className={styles.exploreContent}>
                <div className={styles.exploreIcon}>🌏</div>
                <div>
                  <h4 className={styles.exploreTitle}>Ready to Explore?</h4>
                  <p className={styles.exploreText}>Discover amazing destinations tailored for you.</p>
                </div>
              </div>
              <Link href="/" className={styles.exploreBtn}>Browse Destinations →</Link>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.detailCardHeader}>
                <h3 className={styles.detailCardTitle}><span>🏆</span> Achievements</h3>
              </div>
              <div className={styles.achievementsGrid}>
                <div className={`${styles.badge2} ${styles.badgeActive}`}>
                  <span className={styles.badgeIcon}>🌟</span>
                  <span className={styles.badgeLabel}>Early Member</span>
                </div>
                <div className={`${styles.badge2} ${styles.badgeLocked}`}>
                  <span className={styles.badgeIcon}>🗺️</span>
                  <span className={styles.badgeLabel}>First Trip</span>
                </div>
                <div className={`${styles.badge2} ${styles.badgeLocked}`}>
                  <span className={styles.badgeIcon}>📸</span>
                  <span className={styles.badgeLabel}>Photographer</span>
                </div>
                <div className={`${styles.badge2} ${styles.badgeLocked}`}>
                  <span className={styles.badgeIcon}>🌍</span>
                  <span className={styles.badgeLabel}>Globe Trotter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;