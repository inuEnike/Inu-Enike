import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";

import { AppProvider } from "../Hooks/Context";
import { DefaultSeo } from "next-seo";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
