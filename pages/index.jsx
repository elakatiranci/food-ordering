import Header from "./components/layout/Header";
import Home from "./home";
import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />  
      </Head>
      <Header />
      <Home />
    </div>
  );
}
