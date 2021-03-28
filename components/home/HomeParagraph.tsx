import classes from "../../lib/classes";
import styles from "../../styles/HomeParagraph.module.css";

export default function HomeParagraph({
  children,
  className = "",
  style = {},
}: {
  children: any;
  className?: string;
  style?: { [key: string]: any };
}) {
  return (
    <div
      className={classes(styles.paragraph, styles.bodyText, className)}
      style={style}
    >
      {children}
    </div>
  );
}
