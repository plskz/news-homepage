import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import New from "@/components/new";
import Popular from "@/components/popular";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px] lg:px-40 lg:py-14">
      <Navbar />
      <main className="grid gap-8 px-5 pb-14 sm:px-8_ sm:py-9 md:grid-cols-3">
        <Hero />
        <New />
        <Popular />
      </main>
    </div>
  );
}
