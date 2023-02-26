import classes from "../lib/classes";
import styles from "../styles/Link.module.css";

type Props = {
  children: JSX.Element | string;
  className?: string;
  href: string;
  icon?: any;
  subtle?: boolean;
};

export default function Link({
  children,
  className,
  href,
  icon,
  subtle = false,
}: Props) {
  const classNameToUse = classes(
    subtle ? styles.linkSubtle : styles.link,
    className
  );

  if (icon == null) {
    return (
      <a className={classNameToUse} href={href}>
        {children}
      </a>
    );
  }

  return (
    <div>
      {icon}
      <a className={classNameToUse} href={href} style={{ marginLeft: 6 }}>
        {children}
      </a>
    </div>
  );
}
