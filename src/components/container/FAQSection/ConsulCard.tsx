export default function ConsulCard() {
  return (
    <aside className="w-full md:w-82.25 h-fit md:shrink-0 md:grow-0 bg-(--primary-300) rounded-2xl flex flex-col gap-4 px-5 py-5 text-left md:gap-6 md:px-6 md:py-6">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] text-white md:text-4xl md:leading-11">
          Let's talk it through
        </h3>
        <p className="font-semibold text-sm leading-7 text-white md:text-lg md:leading-8">
          book a free consultation with our team.
        </p>
      </div>

      <img
        src="/assets/FAQ/faq-consul.svg"
        className="h-55 md:h-75 w-full"
        alt=""
      />

      <button className="
    flex gap-1 p-2 rounded-full
    bg-(--neutral-1000) text-(--neutral-0)
    justify-center items-center
    font-bold text-base leading-7.5 tracking-[-0.02em]
    h-11 md:h-12
    cursor-pointer
    transition-all duration-200 ease-out
    hover:bg-black
    hover:text-yellow-600
    hover:scale-[1.02]
    active:scale-[0.98]
  ">
        Free Consultation
      </button>
    </aside>
  );
}