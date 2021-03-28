import Head from "next/head";
import HomeAboutSection from "../components/home/sections/HomeAboutSection";
import HomeHeaderSectionk from "../components/home/sections/HomeHeaderSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hi</title>
      </Head>
      <div>
        <HomeHeaderSectionk />
        <HomeAboutSection />
      </div>
    </div>
  );
}
