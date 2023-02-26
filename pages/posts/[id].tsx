import styles from "./css/post.module.css";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import ResponsiveContainer from "../../components/containers/ResponsiveContainer";
import HomeFooterSection from "../../components/home/sections/HomeFooterSection";
import Link from "../../components/Link";
import HomeSectionTitle from "../../components/home/HomeSectionTitle";
import PostSummary from "../../components/blog/PostSummary";
import PostDate from "../../components/blog/PostDate";

export default function Post({
  postData,
}: {
  postData: {
    summary: string;
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <div className={styles.container}>
      <div>
        <ResponsiveContainer>
          <Link className={styles.allPosts} href={`/blog`} subtle>
            <i>Back to all posts</i>
          </Link>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <HomeSectionTitle
              className={styles.title}
              textAlign="start"
              title={postData.title}
            />
            <div className={styles.metadata}>
              <PostSummary>{postData.summary}</PostSummary>
              <PostDate>{postData.date}</PostDate>
            </div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>
        </ResponsiveContainer>
      </div>
      <HomeFooterSection />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
