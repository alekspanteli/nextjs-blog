import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout home>
        <Head>
          <title>About page</title>
        </Head>
        <section>
          <h1>About Us</h1>
        </section>
      </Layout>
    </>
  );
}
