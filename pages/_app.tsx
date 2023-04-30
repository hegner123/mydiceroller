import "mydiceroller/styles/globals.css";
import type { AppProps } from "next/app";

import JotaiProvider from "../store/atoms";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <JotaiProvider>
        <Component {...pageProps} />
      </JotaiProvider>
    </>
  );
}
