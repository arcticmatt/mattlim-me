import HomeSocialLinks from "../HomeSocialLinks";
import classes from "../../../lib/classes";
import containerStyles from "../../../styles/HomeContainer.module.css";
import styles from "../../../styles/HomeFooterSection.module.css";

export default function HomeFooterSection() {
  return (
    <div className={classes(styles.container, containerStyles.container)}>
      <div className={containerStyles.innerContainer}>
        <HomeSocialLinks color="white" />
      </div>
    </div>
  );
}
