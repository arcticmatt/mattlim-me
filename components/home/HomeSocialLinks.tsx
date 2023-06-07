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

type Props = {
  color: string;
};

export default function HomeSocialLinks({ color }: Props) {
  return (
    <div className={styles.container}>
      <a className={styles.link} href="/resume.pdf">
        <FontAwesomeIcon color={color} icon={faFileAlt} />
      </a>
      <a className={styles.link} href="https://pencilflip.medium.com/">
        <FontAwesomeIcon color={color} icon={faMediumM} />
      </a>
      <a
        className={styles.link}
        href="https://www.youtube.com/channel/UClyUUbhdQf8xVVHGv5he8MA"
      >
        <FontAwesomeIcon color={color} icon={faYoutube} />
      </a>
      <a className={styles.link} href="https://github.com/arcticmatt">
        <FontAwesomeIcon color={color} icon={faGithubAlt} />
      </a>
      <a className={styles.link} href="https://twitter.com/pencilflip">
        <FontAwesomeIcon color={color} icon={faTwitter} />
      </a>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/matt-lim-b311a5a6/"
      >
        <FontAwesomeIcon color={color} icon={faLinkedinIn} />
      </a>
    </div>
  );
}
