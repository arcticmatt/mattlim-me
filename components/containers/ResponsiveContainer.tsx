import styles from "./css/ResponsiveContainer.module.css";
import { CSSProperties } from "react";
import classes from "../../lib/classes";

type Props = {
  children: any;
  className?: string;
  height?: string;
  maxWidthDisabled?: boolean;
  style?: CSSProperties;
};

export default function ResponsiveContainer({
  children,
  className,
  height,
  maxWidthDisabled = false,
  style,
}: Props): JSX.Element {
  const styleToUse = {
    ...style,
    height,
    maxWidth: maxWidthDisabled ? "none" : undefined,
  };

  return (
    <div className={classes(styles.container, className)} style={styleToUse}>
      {children}
    </div>
  );
}
