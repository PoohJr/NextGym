import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar/NavBar";
import Gym1 from "./images/gym1.jpg"


export default function Home() {
  return (
    <main className=""> 
    <NavBar/>
    <Image
    src={Gym1} alt="it is a pic of a dumbell"/>
      <h1 className="text-blue-300"> Hello Word!</h1>
    </main>
  );
}
