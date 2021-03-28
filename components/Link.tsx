import styles from "../styles/Link.module.css";

type Props = {
  children: JSX.Element | string;
  href: string;
};

export default function Link({ children, href }: Props) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}
