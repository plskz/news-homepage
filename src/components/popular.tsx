import { popular } from "@/app/data";
import Image from "next/image";

export default function Popular() {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
      {popular.map((item, index) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          img={item.img}
          index={(index + 1).toString().padStart(2, "0")}
        />
      ))}
    </section>
  );
}

function Card({
  title,
  description,
  img,
  index,
}: {
  title: string;
  description: string;
  img: string;
  index: string;
}) {
  return (
    <div className="flex gap-6 md:h-full md:max-w-full md:shrink-0">
      <div className="w-[30%]">
        <Image
          src={img}
          alt={title}
          width={200}
          height={254}
          className="h-full"
        />
      </div>
      <div className="flex w-[70%] flex-col gap-1">
        <p className="text-2xl font-bold text-primary-20">{index}</p>
        <p className="cursor-pointer font-bold text-neutral-40 hover:text-primary-20">
          {title}
        </p>
        <p className="text-neutral-30 lg:text-sm">{description}</p>
      </div>
    </div>
  );
}
