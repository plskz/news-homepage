import { latest } from "@/app/data";

export default function New() {
  return (
    <section className="flex flex-col bg-neutral-40 px-4 pt-6 text-neutral-10">
      <h2 className="text-4xl font-bold text-primary-10">New</h2>
      <div className="divide-y-[0.5px] divide-neutral-20/60">
        {latest.map((item, index) => (
          <div key={index} className="py-6">
            <h3 className="cursor-pointer text-lg font-bold hover:text-primary-10">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-20">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
