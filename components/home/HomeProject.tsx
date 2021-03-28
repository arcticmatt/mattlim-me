import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../Link";
import styles from "../../styles/HomeProject.module.css";

type Props = {
  children: any;
  links: {
    code?: string;
    project: string;
  };
  media: any;
  title: string;
};

export default function HomeProject({ children, links, media, title }: Props) {
  return (
    <div className={styles.container}>
      <a className={styles.media} href={links.project}>
        {media}
      </a>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{children}</div>
        <div className={styles.links}>
          <Link
            href={links.project}
            icon={<FontAwesomeIcon icon={faLink} style={{ opacity: 0.7 }} />}
          >
            See the project
          </Link>
          {links.code != null && (
            <div style={{ marginLeft: 12 }}>
              <Link
                href={links.project}
                icon={
                  <FontAwesomeIcon icon={faCode} style={{ opacity: 0.7 }} />
                }
              >
                See the code
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
