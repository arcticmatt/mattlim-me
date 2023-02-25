import styles from "./css/blog.module.css";
import { GetStaticProps } from "next";
import Link from "next/link";
import ResponsiveContainer from "../components/containers/ResponsiveContainer";
import HomeFooterSection from "../components/home/sections/HomeFooterSection";
import { getSortedPostsData } from "../lib/posts";
import HomeSectionTitle from "../components/home/HomeSectionTitle";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <div className={styles.container}>
      <div>
        <ResponsiveContainer>
          <HomeSectionTitle title="Blog" />
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small>{date}</small>
              </li>
            ))}
          </ul>
        </ResponsiveContainer>
      </div>
      <HomeFooterSection />
    </div>
  );
}
