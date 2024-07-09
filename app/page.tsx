import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar/NavBar";


export default function Home() {
  return (
    <main className=""> 
    <NavBar/>
      <h1 className="text-blue-300"> Hello Word!</h1>
    </main>
  );
}
