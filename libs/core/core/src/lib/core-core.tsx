import styles from './core-core.module.css';

/* eslint-disable-next-line */
export interface CoreCoreProps {}

export function CoreCore(props: CoreCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CoreCore!</h1>
    </div>
  );
}

export default CoreCore;
