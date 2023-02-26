import styles from "./css/blog.module.css";
import { GetStaticProps } from "next";
import ResponsiveContainer from "../components/containers/ResponsiveContainer";
import HomeFooterSection from "../components/home/sections/HomeFooterSection";
import { getSortedPostsData } from "../lib/posts";
import Link from "../components/Link";
import PostSummary from "../components/blog/PostSummary";
import PostDate from "../components/blog/PostDate";
import HomeParagraph from "../components/home/HomeParagraph";
import { useState } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

function FilterButton({
  isActive,
  onClick,
  value,
}: {
  isActive: boolean;
  onClick: () => void;
  value: string;
}) {
  return (
    <button
      key={value}
      className={styles.category}
      onClick={onClick}
      style={isActive ? { backgroundColor: "#ffeef2" } : {}}
      type="button"
    >
      {value}
    </button>
  );
}

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    category: string;
    date: string;
    summary: string;
    tags: Array<string>;
    title: string;
    id: string;
  }[];
}) {
  const categories = [...new Set(allPostsData.map((post) => post.category))];
  const tags = [...new Set(allPostsData.map((post) => post.tags).flat())];
  const [isCategoriesShown, setIsCategoriesShown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isTagsShown, setIsTagsShown] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  console.log(allPostsData);
  return (
    <div className={styles.container}>
      <div>
        <ResponsiveContainer>
          <HomeParagraph className={styles.description}>
            Welcome to my collection of (often rambling) random thoughts and
            opinions, mostly about various things I've read. If anything here
            catches your interest and you'd like to talk,{" "}
            <Link href="https://twitter.com/pencilflip">hmu</Link>! These posts
            are more personal—if you want to view my technical writings about
            webdev/encryption/solana/etc, check out my{" "}
            <Link href="https://pencilflip.medium.com/">Medium</Link>.
          </HomeParagraph>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => {
                setIsCategoriesShown((val) => !val);
                setIsTagsShown(false);
                setSelectedTag(null);
              }}
              type="button"
            >
              Categories
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setIsTagsShown((val) => !val);
                setIsCategoriesShown(false);
                setSelectedCategory(null);
              }}
              type="button"
            >
              Tags
            </button>
          </div>

          {isCategoriesShown && (
            <div className={styles.categories}>
              <FilterButton
                isActive={selectedCategory == null}
                onClick={() => setSelectedCategory(null)}
                value="Show All"
              />
              {categories.map((category) => (
                <FilterButton
                  isActive={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  value={category}
                />
              ))}
            </div>
          )}

          {isTagsShown && (
            <div className={styles.categories}>
              <FilterButton
                isActive={selectedTag == null}
                onClick={() => setSelectedTag(null)}
                value="Show All"
              />
              {tags.map((tag) => (
                <FilterButton
                  isActive={selectedTag === tag}
                  onClick={() => setSelectedTag(tag)}
                  value={tag}
                />
              ))}
            </div>
          )}

          <div className={styles.posts}>
            {allPostsData
              .filter(
                (data) =>
                  selectedCategory == null || data.category === selectedCategory
              )
              .filter(
                (data) => selectedTag == null || data.tags.includes(selectedTag)
              )
              .map(({ id, date, summary, title }) => (
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
