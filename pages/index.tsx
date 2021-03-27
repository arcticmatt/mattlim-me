import Head from "next/head";
import HomeHeader from "../components/home/HomeHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hi</title>
      </Head>
      <div>
        <HomeHeader />
      </div>
    </div>
  );
}
