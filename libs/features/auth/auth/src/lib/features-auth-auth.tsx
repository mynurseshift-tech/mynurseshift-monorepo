import styles from './features-auth-auth.module.css';

/* eslint-disable-next-line */
export interface FeaturesAuthAuthProps {}

export function FeaturesAuthAuth(props: FeaturesAuthAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeaturesAuthAuth!</h1>
    </div>
  );
}

export default FeaturesAuthAuth;
