import HomeProfilePicture from "../HomeProfilePicture";
import HomeSocialLinks from "../HomeSocialLinks";
import classes from "../../../lib/classes";
import containerStyles from "../../../styles/HomeContainer.module.css";
import styles from "../../../styles/HomeHeader.module.css";

export default function HomeHeaderSectionk() {
  return (
    <div className={classes(styles.container, containerStyles.container)}>
      <div className={styles.title}>Matt Lim</div>
      <div className={styles.description}>
        <div>Software @ Facebook NPE</div>
        <div>Creator of many side projects</div>
        <div>Forager of mushrooms</div>
      </div>
      <div className={styles.socialLinks}>
        <HomeSocialLinks />
      </div>
      <div className={styles.profilePicture}>
        <HomeProfilePicture />
      </div>
    </div>
  );
}
