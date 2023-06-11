import styles from "./HomeScreen.module.css";
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.newArrivals}>
        <div className={styles.product01}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <img className={styles.loveIcon} alt="" src="/love.svg" />
          <div className={styles.text}>
            <div className={styles.theMarcJacobsContainer}>
              <p className={styles.theMarcJacobs}>The Marc Jacobs</p>
              <p className={styles.travelerTote}>Traveler Tote</p>
              <p className={styles.theMarcJacobs}>$195.00</p>
            </div>
          </div>
        </div>
        <div className={styles.product02}>
          <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          <img className={styles.loveIcon} alt="" src="/love.svg" />
          <div className={styles.text1}>
            <div className={styles.theMarcJacobsContainer}>
              <p className={styles.theMarcJacobs}>Axel Arigato</p>
              <p className={styles.travelerTote}>Clean 90 Triple Sneakers</p>
              <p className={styles.theMarcJacobs}>$245.00</p>
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.viewAll}>View All</div>
          <b className={styles.newArrivals1}>New Arrivals</b>
        </div>
      </div>
      <div className={styles.navegationBar}>
        <div className={styles.bg}>
          <div className={styles.bgChild} />
        </div>
        <img className={styles.profileIcon} alt="" src="/profile.svg" />
        <img
          className={styles.notificationIcon}
          alt=""
          src="/notification.svg"
        />
        <img className={styles.cartIcon} alt="" src="/cart.svg" />
        <div className={styles.home}>
          <div className={styles.bg1}>
            <div className={styles.bgItem} />
          </div>
          <div className={styles.text2}>
            <div className={styles.home1}>Home</div>
          </div>
          <img className={styles.homeIcon} alt="" src="/home.svg" />
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.features02}>
          <img className={styles.imageIcon2} alt="" src="/image2@2x.png" />
          <div className={styles.offer}>
            <div className={styles.button}>
              <div className={styles.buttonChild} />
              <b className={styles.getNow}>Get Now</b>
            </div>
            <div className={styles.code}>
              <div className={styles.withCodefscreation}>
                With code:FSCREATION
              </div>
            </div>
            <div className={styles.title1}>
              <div className={styles.theMarcJacobsContainer}>
                <p className={styles.off}>
                  <b>70% Off</b>
                </p>
                <p className={styles.onEverythingToday}>On everything today</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.features01}>
          <img className={styles.imageIcon2} alt="" src="/image3@2x.png" />
          <div className={styles.offer}>
            <div className={styles.button}>
              <div className={styles.buttonChild} />
              <b className={styles.getNow}>Get Now</b>
            </div>
            <div className={styles.code}>
              <div className={styles.withCodefscreation}>
                With code:FSCREATION
              </div>
            </div>
            <div className={styles.title1}>
              <div className={styles.theMarcJacobsContainer}>
                <p className={styles.off}>
                  <b>50% Off</b>
                </p>
                <p className={styles.onEverythingToday}>On everything today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sesrchBar}>
        <img className={styles.filtterIcon} alt="" src="/filtter.svg" />
        <div className={styles.searchBar}>
          <div className={styles.searchBar}>
            <div className={styles.bgInner} />
          </div>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.text3}>
            <div className={styles.search}>Search...</div>
          </div>
        </div>
      </div>
      <div className={styles.title3}>
        <div className={styles.welcomeOurFashionsContainer}>
          <p className={styles.off}>
            <b>Welcome,</b>
          </p>
          <p className={styles.ourFashionsApp}>Our Fashions App</p>
        </div>
      </div>
      <img className={styles.menuBarIcon} alt="" src="/menu-bar.svg" />
      <img
        className={styles.homeScreenChild}
        alt=""
        src="/rectangle-97@2x.png"
      />
    </div>
  );
};

export default HomeScreen;
