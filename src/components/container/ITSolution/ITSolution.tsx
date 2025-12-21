import { SmartIT } from "../../constant/AllData";
import ITSolution from "./ITSolutionCard";

export default function Solutions() {
  return (
    <article
      id="services"
      className="flex flex-col gap-10 md:gap-16 py-10 px-4 md:py-20 md:px-35"
    >
      <header className="flex flex-col gap-2.75 text-center">
        <h2 className="font-semibold text-[28px] leading-9.5 md:text-[40px] md:leading-14 tracking-[-0.02em]">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="font-medium text-sm leading-7 text-(--neutral-400)">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </header>
      <div className="flex flex-col gap-10">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="first-row flex flex-col md:flex-row gap-10 md:gap-5"
          >
            {SmartIT.slice(rowIndex * 3, rowIndex * 3 + 3).map((item) => (
              <ITSolution key={item.title} item={item} />
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}