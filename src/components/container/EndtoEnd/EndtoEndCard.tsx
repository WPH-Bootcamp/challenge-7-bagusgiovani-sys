
import { Endborder } from "../../constant/AllData";
import EndtoEnd from "./EndtoEnd";

export default function EndSection() {
  return (
    <section className="flex flex-col text-(--neutral-25) px-4 md:px-35 py-20 gap-6 md:gap-16">
      <header className="flex flex-col gap-2.75">
        <h2 className="text-center font-bold tracking-[-0.02em] text-[28px] leading-11 md:text-5xl md:leading-14.5">
          End-to-End IT Solutions That Drive Results
        </h2>

        <p className="text-center text-sm md:text-lg leading-7 md:leading-8 text-(--neutral-400) mx-auto">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {Endborder.map((m) => (
          <EndtoEnd key={m.label} item={m} />
        ))}        
      </div>
    </section>
  );
}
