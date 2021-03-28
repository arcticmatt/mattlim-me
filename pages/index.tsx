import Head from "next/head";
import HomeAboutSection from "../components/home/sections/HomeAboutSection";
import HomeHeaderSectionk from "../components/home/sections/HomeHeaderSection";
import HomeProjectsSection from "../components/home/sections/HomeProjectsSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <HomeHeaderSectionk />
        <HomeAboutSection />
        <HomeProjectsSection />
      </div>
    </div>
  );
}
