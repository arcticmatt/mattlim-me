import Image from "next/image";
import styles from "../../styles/HomeProfilePicture.module.css";

export default function HomeProfilePicture() {
  return (
    <div className={styles.imageContainer}>
      <Image
        alt="Header"
        className={styles.image}
        src="/images/profile2.jpg"
        height={484}
        layout="responsive"
        width={340}
      />
    </div>
  );
}
