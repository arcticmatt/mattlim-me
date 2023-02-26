import "../styles/global.css";
import "../styles/fonts/SpaceMono.css";
import "../styles/fonts/WorkSans.css";
import { Analytics } from "@vercel/analytics/react";

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
