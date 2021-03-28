import Head from "next/head";
import { useEffect } from "react";

export default function HomeGradientSection() {
  useEffect(() => {
    // @ts-ignore
    window.startGradient(2);
  }, []);

  return (
    <>
      <Head>
        <title>Hi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script type="text/javascript" src="/scripts/gradients.js"></script>
      </Head>
      <canvas
        id="myCanvas"
        width="900"
        height="450"
        style={{ height: "300px", width: "100%" }}
      ></canvas>
    </>
  );
}
