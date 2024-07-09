import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar/NavBar";
import Header from './home/page'


export default function Home() {
  return (
    <main className=""> 
    <NavBar/>
      <Header/>
      <h1 className="text-blue-300"> Hello Word!</h1>
    </main>
  );
}
