import styles from "../styles/Link.module.css";

type Props = {
  children: JSX.Element | string;
  href: string;
  icon?: any;
  subtle?: boolean;
};

export default function Link({ children, href, icon, subtle = false }: Props) {
  if (icon == null) {
    return (
      <a className={subtle ? styles.linkSubtle : styles.link} href={href}>
        {children}
      </a>
    );
  }

  return (
    <div>
      {icon}
      <a
        className={subtle ? styles.linkSubtle : styles.link}
        href={href}
        style={{ marginLeft: 6 }}
      >
        {children}
      </a>
    </div>
  );
}
