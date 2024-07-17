import NavBar from "./navbar/NavBar";
import Header from "./home/page";
import Trainer from "./trainer/trainer";
import Cards from "./cards/cards";
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="p-3">
        <NavBar />
        <Header />
        <Trainer />
        <Cards />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
