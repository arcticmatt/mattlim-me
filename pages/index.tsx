import Head from "next/head";
import HomeAboutSection from "../components/home/sections/HomeAboutSection";
import HomeFavoritesSection from "../components/home/sections/HomeFavoritesSection";
import HomeFooterSection from "../components/home/sections/HomeFooterSection";
import HomeGradientSection from "../components/home/sections/HomeGradientSection";
import HomeHeaderSection from "../components/home/sections/HomeHeaderSection";
import HomeProjectsGraveyardSection from "../components/home/sections/HomeProjectsGraveyardSection";
import HomeProjectsSection from "../components/home/sections/HomeProjectsSection";
import Minymon from "../components/Minymon";

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
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js"
          type="text/javascript"
        ></script>
        <script
          src="https://api.minymon.com/minymon.js"
          defer
          type="text/javascript"
        ></script>
      </Head>
      <div>
        <HomeHeaderSection />
        <HomeAboutSection />
        <HomeProjectsSection />
        <HomeProjectsGraveyardSection />
        <HomeFavoritesSection />
        <HomeGradientSection />
        <HomeFooterSection />
      </div>
      <Minymon />
    </div>
  );
}
