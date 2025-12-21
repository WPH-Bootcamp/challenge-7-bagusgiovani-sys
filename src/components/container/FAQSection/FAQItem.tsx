import { FaqToggle } from "../../ui/Button/FAQToggle";
import type { FaqSec } from "../../constant/AllData";

type FAQItemProps = {
  faq: FaqSec;
  isOpen: boolean;
  onToggle: (id: string) => void;
};

export default function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(faq.id);
    }
  };

  return (
    <div className="flex flex-col gap-7 w-full">
      <div
        className="flex flex-col gap-4 menu-hover cursor-pointer"
        onClick={() => onToggle(faq.id)}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-9 text-neutral-25">
            {faq.question}
          </h3>
          <FaqToggle open={isOpen} />
        </div>

        {isOpen && (
          <p 
            id={`faq-answer-${faq.id}`}
            className="font-medium text-sm leading-7 text-neutral-400 md:text-xl md:leading-8.5"
          >
            {faq.answer}
          </p>
        )}
      </div>

      <hr className="border-(--neutral-800)" />
    </div>
  );
}