import styles from "./css/blog.module.css";
import { GetStaticProps } from "next";
import ResponsiveContainer from "../components/containers/ResponsiveContainer";
import HomeFooterSection from "../components/home/sections/HomeFooterSection";
import { getSortedPostsData } from "../lib/posts";
import HomeSectionTitle from "../components/home/HomeSectionTitle";
import Link from "../components/Link";
import PostSummary from "../components/blog/PostSummary";
import PostDate from "../components/blog/PostDate";
import HomeParagraph from "../components/home/HomeParagraph";

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
    summary: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <div className={styles.container}>
      <div>
        <ResponsiveContainer>
          <HomeSectionTitle title="Blog" />
          <HomeParagraph className={styles.description}>
            Welcome to my collection of (often rambling) random thoughts and
            opinions, mostly about various things I've read. If anything here
            catches your interest and you'd like to talk,{" "}
            <Link href="https://twitter.com/pencilflip">hmu</Link>! These posts
            are more personal—if you want to view my technical writings about
            webdev/encryption/solana/etc, check out my{" "}
            <Link href="https://pencilflip.medium.com/">Medium</Link>.
          </HomeParagraph>
          <div className={styles.posts}>
            {allPostsData.map(({ id, date, summary, title }) => (
              <div className={styles.post} key={id}>
                <Link className={styles.title} href={`/posts/${id}`} subtle>
                  {title}
                </Link>
                <PostSummary>{summary}</PostSummary>
                <PostDate>{date}</PostDate>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </div>
      <HomeFooterSection />
    </div>
  );
}
