import "mlh/styles/globals.css";
import type { AppProps } from "next/app";
import { createStore, atom, Provider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  const myStore = createStore();
  const countAtom = atom(0);
  myStore.set(countAtom, 1);
  const unsub = myStore.sub(countAtom, () => {
    console.log("countAtom value is changed to", myStore.get(countAtom));
  });
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
