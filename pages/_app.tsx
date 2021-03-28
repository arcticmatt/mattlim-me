import "../styles/global.css";
import "../styles/fonts/SpaceMono.css";
import "../styles/fonts/WorkSans.css";

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
