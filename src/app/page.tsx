import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import New from "@/components/new";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <New />
      </main>
    </>
  );
}
