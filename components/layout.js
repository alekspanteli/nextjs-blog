import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, home }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <header>Header goes here</header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>&copy; {new Date().getFullYear()} Footer goes here</footer>
    </div>
  );
}
