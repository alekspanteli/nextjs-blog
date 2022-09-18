import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  );
}
