import styles from "./Processing.module.css";
const Processing = () => {
  return (
    <div className={styles.processing}>
      <img className={styles.load1Icon} alt="" src="" />
      <div className={styles.info}>
        <div className={styles.paymentIsProcessing}>Payment is Processing</div>
        <div className={styles.pleaseWaitDo}>
          Please wait, do not close this screen
        </div>
      </div>
    </div>
  );
};

export default Processing;
