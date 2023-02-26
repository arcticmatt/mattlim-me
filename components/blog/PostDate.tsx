import styles from "./css/PostDate.module.css";

type Props = {
  children: any;
};

export default function PostDate({ children }: Props) {
  return <div className={styles.date}>{children}</div>;
}
