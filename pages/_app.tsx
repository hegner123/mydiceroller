import "mydiceroller/styles/globals.css";
import { DevTools, useAtomsDebugValue } from "jotai-devtools";
import { Provider, createStore } from "jotai";
import { AppProps } from "next/app";

const appStore = createStore();

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={appStore}>
        <DevTools store={appStore} />
        <DebugAtoms />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
