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
        <script type="text/javascript" src="/scripts/gradients.js"></script>
      </Head>
      <canvas
        id="myCanvas"
        width="900"
        height="450"
        style={{ height: "300px", marginBottom: -10, width: "100%" }}
      ></canvas>
    </>
  );
}
