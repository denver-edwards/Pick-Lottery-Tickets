import Head from "next/head";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pick Lottery Tickets</title>
        <meta httpEquiv="Content-Type" content="text/html" />
        <meta name="application-name" content="Pick Lottery Tickets" />
        <meta name="author" content="Mogu" />
        <meta
          name="description"
          content="Generate your winning lottery tickets today!"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
