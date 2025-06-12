import HomeProfilePicture from "../HomeProfilePicture";
import HomeSocialLinks from "../HomeSocialLinks";
import Link from "../../Link";
import classes from "../../../lib/classes";
import containerStyles from "../../../styles/HomeContainer.module.css";
import styles from "../../../styles/HomeHeaderSection.module.css";

export default function HomeHeaderSectionk() {
  return (
    <div className={classes(styles.container, containerStyles.container)}>
      <div
        className={classes(
          styles.innerContainer,
          containerStyles.innerContainer
        )}
      >
        <div className={styles.column1}>
          <div className={styles.title}>Matt Lim</div>
          <div className={styles.description}>
            <div>
              Research at OpenAI
              <br /> Creator of <Link href="#projects">side projects</Link>{" "}
              &#x1f4bb;
              <br /> Check out my <Link href="#favorites">favorites</Link>{" "}
              &#127812;
              <br /> I occasionally <Link href="/blog">blog</Link> ✍️
            </div>
          </div>
          <div className={styles.socialLinks}>
            <HomeSocialLinks color="black" />
          </div>
        </div>
        <div className={styles.profilePicture}>
          <HomeProfilePicture />
        </div>
      </div>
    </div>
  );
}
