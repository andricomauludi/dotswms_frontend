import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TESTONG</h1>
      <br/>
      <Link href="/posts">
        POSTONG
      </Link>
      <br/>
      <Link href="/albums">
        albums
      </Link>
    </>
  );
}
