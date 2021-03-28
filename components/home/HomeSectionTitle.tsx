import styles from "../../styles/HomeSectionTitle.module.css";

type Props = {
  textAlign?: "center" | "start";
  title: string;
};

export default function HomeSectionTitle({
  textAlign = "center",
  title,
}: Props) {
  return (
    <div className={styles.title} style={{ textAlign }}>
      {title}
    </div>
  );
}
