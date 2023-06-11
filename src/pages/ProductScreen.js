import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductScreen.module.css";
const ProductScreen = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/-payment-screen");
  }, [navigate]);

  return (
    <div className={styles.productScreen}>
      <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
      <div className={styles.productDetails}>
        <div className={styles.bg}>
          <div className={styles.bgChild} />
        </div>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.bg1}>
            <div className={styles.bgItem} />
          </div>
          <div className={styles.text}>
            <div className={styles.buyNow}>Buy Now</div>
          </div>
          <img className={styles.icon} alt="" src="/icon1.svg" />
        </div>
        <div className={styles.price}>
          <div className={styles.totalPrice19800Container}>
            <p className={styles.totalPrice}>Total Price</p>
            <p className={styles.p}>
              <b>$198.00</b>
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.text1}>
            <div className={styles.getALittle}>
              Get a little lift from these Sam Edelman sandals featuring ruched
              straps and leather lace-up ties, while a braided jute sole makes a
              fresh statement for summer.
            </div>
          </div>
          <div className={styles.title}>
            <div className={styles.avaliableInStok}>Description</div>
          </div>
        </div>
        <div className={styles.size}>
          <div className={styles.size1}>
            <div className={styles.xl}>
              <div className={styles.xlChild} />
              <div className={styles.xl1}>XL</div>
            </div>
            <div className={styles.xxl}>
              <div className={styles.xlChild} />
              <div className={styles.xxl1}>XXL</div>
            </div>
            <div className={styles.l}>
              <div className={styles.xlChild} />
              <div className={styles.l1}>L</div>
            </div>
            <div className={styles.m}>
              <div className={styles.xlChild} />
              <div className={styles.m1}>M</div>
            </div>
            <div className={styles.s}>
              <div className={styles.xlChild} />
              <div className={styles.s1}>S</div>
            </div>
          </div>
          <div className={styles.title1}>
            <div className={styles.avaliableInStok}>Size</div>
          </div>
        </div>
        <div className={styles.productMeta}>
          <div className={styles.stok}>
            <div className={styles.avaliableInStok}>Avaliable in stok</div>
          </div>
          <div className={styles.piceRange}>
            <div className={styles.piceRangeChild} />
            <div className={styles.div}>{`-    `}</div>
            <div className={styles.div1}>{`-    `}</div>
            <div className={styles.div2}>1</div>
          </div>
          <div className={styles.review}>
            <img className={styles.starIcon} alt="" src="/star.svg" />
            <div className={styles.review1}>(320 Review)</div>
          </div>
          <div className={styles.title2}>
            <div className={styles.rollerRabbitVadoContainer}>
              <p className={styles.rollerRabbit}>Roller Rabbit</p>
              <p className={styles.vadoOdelleDress}>Vado Odelle Dress</p>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar1.svg" />
      <div className={styles.mobileTab1Wrapper}>
        <div className={styles.mobileTab1}>
          <div className={styles.div3}>4:46</div>
          <img
            className={styles.faSolidwifiIcon}
            alt=""
            src="/fasolidwifi.svg"
          />
          <img
            className={styles.bibatteryHalfIcon}
            alt=""
            src="/bibatteryhalf.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
