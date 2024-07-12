import NavBar from "./navbar/NavBar";
import Header from './home/page'
import Trainer from "./trainer/trainer";


export default function Home() {
  return (
    <main className="bg-black"> 
    <NavBar/>
      <Header/>
      <Trainer/>
    </main>
  );
}
