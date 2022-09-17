import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        Read <Link href="/posts/first-post">this page!</Link>
      </p>
      <Image
        src="/images/profile.webp" // Route of the image file
        height={256} // Desired size with correct aspect ratio
        width={256} // Desired size with correct aspect ratio
        alt="Alex Panteli"
      />
    </div>
  );
}
