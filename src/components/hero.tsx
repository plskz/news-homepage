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
        <h1 className="text-neutral-40 text-4xl font-bold">
          The Bright Future of Web 3.0?
        </h1>
        <div className="text-neutral-30 flex flex-col gap-4">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-primary-20 text-neutral-40 w-40 px-4 py-3 font-bold uppercase tracking-wider">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
