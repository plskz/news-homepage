import Image from "next/image";

export default function Hero() {
  return (
    // <section className="px-5 md:px-44">
    <section className="md:col-span-2">
      <div className="flex items-center justify-center">
        <Image
          src="/images/web-3-mobile.jpg"
          alt="Web 3"
          width={686}
          height={600}
          className="bg-cover md:hidden"
        />
        <Image
          src="/images/web-3-desktop.jpg"
          alt="Web 3"
          width={1460}
          height={600}
          className="hidden bg-cover md:block"
        />
      </div>

      <div className="flex flex-col gap-3 pt-4 md:flex-row">
        <h1 className="basis-1/2 text-4xl font-bold text-neutral-40 lg:shrink-0 lg:text-6xl">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex shrink-0 basis-1/2 flex-col gap-4 text-neutral-30">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-40 bg-primary-20 px-4 py-3 font-bold uppercase tracking-wider text-neutral-40">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
