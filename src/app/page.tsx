import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import New from "@/components/new";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid gap-10 px-5 sm:px-8 sm:py-9 md:grid-cols-3">
        <Hero />
        <New />
      </main>
    </>
  );
}
