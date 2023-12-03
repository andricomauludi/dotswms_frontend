import Link from "next/link";
import "bulma/css/bulma.css";
import axios from "axios";
import Login from "./components/Auth/Login";
axios.defaults.withCredentials = true;

export default function Home() {
  return (
    <>
      <Login />
      {/* <h1>TESTONG</h1>
      <br/>
      <Link href="/posts">
        POSTONG
      </Link>
      <br/>
      <Link href="/albums">
        albums
      </Link> */}
    </>
  );
}
