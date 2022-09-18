import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First post</title>
        </Head>
        <section>
          <h1>First Post</h1>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </section>
      </Layout>
    </>
  );
}
