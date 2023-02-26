import styles from "./css/PostSummary.module.css";

type Props = {
  children: any;
};

export default function PostSummary({ children }: Props) {
  return <div className={styles.summary}>{children}</div>;
}
