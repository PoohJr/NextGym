import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1> Hello Word!</h1>
      <Link href={"/users"}>
        <p>Click To Switch pages</p>
      </Link>
    </main>
  );
}
