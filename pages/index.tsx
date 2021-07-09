import Head from "next/head";
import HomeAboutSection from "../components/home/sections/HomeAboutSection";
import HomeFavoritesSection from "../components/home/sections/HomeFavoritesSection";
import HomeFooterSection from "../components/home/sections/HomeFooterSection";
import HomeGradientSection from "../components/home/sections/HomeGradientSection";
import HomeHeaderSection from "../components/home/sections/HomeHeaderSection";
import HomeProjectsSection from "../components/home/sections/HomeProjectsSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matt Lim</title>
        <meta
          name="description"
          content="Matt Lim is a software engineer. He likes working on side projects and foraging for mushrooms."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <HomeHeaderSection />
        <HomeAboutSection />
        <HomeProjectsSection />
        <HomeFavoritesSection />
        <HomeGradientSection />
        <HomeFooterSection />
      </div>
    </div>
  );
}
