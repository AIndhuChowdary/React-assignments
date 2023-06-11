import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PaymentScreen.module.css";
const PaymentScreen = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/processing");
  }, [navigate]);

  return (
    <div className={styles.paymentScreen}>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.frame}>
          <div className={styles.text}>Pay now</div>
        </div>
      </div>
      <div className={styles.cardNumber}>
        <div className={styles.cardNumberChild} />
        <div className={styles.cardNumber1}>Card number</div>
        <div className={styles.enterCardNumber}>Enter card number</div>
      </div>
      <div className={styles.cardName}>
        <div className={styles.cardNameChild} />
        <div className={styles.nameOnCard}>Name on card</div>
        <div className={styles.enterName}>Enter name</div>
      </div>
      <div className={styles.expiryDate}>
        <div className={styles.expiryDateChild} />
        <div className={styles.expirationDate}>Expiration date</div>
        <div className={styles.enterExpiryDate}>Enter Expiry Date</div>
      </div>
      <div className={styles.securityCode}>
        <div className={styles.securityCodeChild} />
        <div className={styles.securityCode1}>Security code</div>
        <div className={styles.enterCode}>Enter Code</div>
        <img
          className={styles.uniconsEllipsisH}
          alt=""
          src="/unicons--ellipsish.svg"
        />
      </div>
    </div>
  );
};

export default PaymentScreen;
