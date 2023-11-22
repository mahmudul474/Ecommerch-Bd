import styles from '../../styles/Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerContainer}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
      </div>
    </div>
  );
};

export default Spinner;
