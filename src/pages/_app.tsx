import Head from "next/head";
import Router from "next/router";

import * as gtag from "../lib/gtag";

import "bulma/css/bulma.css";

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ABC마트 사이즈별 저렴이 줍줍</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
