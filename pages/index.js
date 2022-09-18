import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>Home page</title>
        </Head>
        <section>
          <p>I am front end developer</p>
          <p>
            <Link href="/posts/first-post">First post</Link>
          </p>
        </section>
      </Layout>
    </>
  );
}
