import styles from "../styles/Link.module.css";

type Props = {
  children: JSX.Element | string;
  href: string;
  icon?: any;
};

export default function Link({ children, href, icon }: Props) {
  if (icon == null) {
    return (
      <a className={styles.link} href={href}>
        {children}
      </a>
    );
  }

  return (
    <div>
      {icon}
      <a className={styles.link} href={href} style={{ marginLeft: 6 }}>
        {children}
      </a>
    </div>
  );
}
