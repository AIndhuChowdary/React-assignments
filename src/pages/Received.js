import styles from "./Received.module.css";
const Received = () => {
  return (
    <div className={styles.received}>
      <div className={styles.received1}>
        <img className={styles.check1Icon} alt="" src="/check-1@2x.png" />
        <div className={styles.paymentReceived}>Payment Received</div>
        <div className={styles.yourOrderIs}>
          Your order is now on the way. Please check your email for the receipt
        </div>
      </div>
    </div>
  );
};

export default Received;
