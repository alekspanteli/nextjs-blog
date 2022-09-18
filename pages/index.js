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
      <p className="font-bold font-serif text-xs antialiased ">
        Read{" "}
        <Link href="/posts/first-post">
          <a className="text-[#50d71e]">this page!</a>
        </Link>
      </p>
      <Image
        src="/images/gallery.avif" // Route of the image file
        height={500} // Desired size with correct aspect ratio
        width={500} // Desired size with correct aspect ratio
        alt="Alex Panteli"
      />
    </div>
  );
}
