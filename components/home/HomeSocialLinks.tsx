import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import styles from "../../styles/HomeSocialLinks.module.css";

export default function HomeSocialLinks() {
  return (
    <div className={styles.container}>
      <a
        className={styles.link}
        href="https://github.com/arcticmatt/Resume/blob/master/md/resume.pdf"
      >
        <FontAwesomeIcon icon={faFileAlt} />
      </a>
      <a className={styles.link} href="https://pencilflip.medium.com/">
        <FontAwesomeIcon icon={faMediumM} />
      </a>
      <a
        className={styles.link}
        href="https://www.youtube.com/channel/UClyUUbhdQf8xVVHGv5he8MA"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a className={styles.link} href="https://github.com/arcticmatt">
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
      <a className={styles.link} href="https://twitter.com/pencilflip">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/matt-lim-b311a5a6/"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
}
