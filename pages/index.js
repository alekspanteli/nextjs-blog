import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>Home page</title>
        </Head>
        <section>
          <p>I am front end developer</p>
        </section>
      </Layout>
    </>
  );
}
