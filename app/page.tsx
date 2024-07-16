import NavBar from "./navbar/NavBar";
import Header from "./home/page";
import Trainer from "./trainer/trainer";
import Cards from "./cards/cards";
import Contact from "./contact/contact";

export default function Home() {
  return (
    <main className="bg-black">
      <NavBar />
      <Header />
      <Trainer />
      <Cards />
      <Contact />
    </main>
  );
}
