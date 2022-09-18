import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout home>
        <Head>
          <title>Contact page</title>
        </Head>
        <section>
          <h1>Contact Us</h1>
        </section>
      </Layout>
    </>
  );
}
