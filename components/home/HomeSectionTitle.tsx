import classes from "../../lib/classes";
import styles from "../../styles/HomeSectionTitle.module.css";

type Props = {
  className?: string;
  textAlign?: "center" | "start";
  title: string;
};

export default function HomeSectionTitle({
  className,
  textAlign = "center",
  title,
}: Props) {
  return (
    <div className={classes(styles.title, className)} style={{ textAlign }}>
      {title}
    </div>
  );
}
