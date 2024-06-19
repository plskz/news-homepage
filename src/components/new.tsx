import { latest } from "@/app/data";

export default function New() {
  return (
    <section className="bg-neutral-40 text-neutral-10 flex flex-col px-4 pt-6">
      <h2 className="text-primary-10 text-4xl font-bold">New</h2>
      <div className="divide-neutral-20/60 divide-y-[0.5px]">
        {latest.map((item, index) => (
          <div key={index} className="py-6">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-neutral-20 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
