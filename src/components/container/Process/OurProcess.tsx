import * as AllData from "../../constant/AllData";
import OurProcessEven from "./OurProcessEven";
import OurProcessOdds from "./OurProcessOdds";

export default function ProcessSection() {
  const processSteps: AllData.ProcessStep[] = AllData.OurProcess;

  return (
    <section
      id="process"
      className="flex flex-col gap-6 md:gap-16 py-10 px-4 md:py-20 md:px-35"
    >
      <header className="flex flex-col gap-2.75">
        <h2 className="text-center font-bold tracking-[-0.02em] text-[28px] leading-14 md:text-[40px] md:leading-9.5">
          Our Process
        </h2>

        <p className="text-center text-sm md:text-lg leading-7 md:leading-8 text-(--neutral-400) max-w-230 mx-auto">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </header>
      <div className="flex flex-col gap-4">
        {processSteps.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <OurProcessEven
                item={item}
                step={index + 1}
                isLast={index === processSteps.length - 1}
              />
            ) : (
              <OurProcessOdds
                item={item}
                step={index + 1}
                isLast={index === processSteps.length - 1}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}