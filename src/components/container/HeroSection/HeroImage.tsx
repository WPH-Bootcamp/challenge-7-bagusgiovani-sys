
export default function HeroImage() {
  return (
    <div
      id="phone-div"
      className="relative pt-10.75 md:pt-0 md:top-0 z-0 md:w-1/2 md:ml-auto"
    >
      <img
        className="block dark:hidden w-full h-auto object-contain translate-x-0.75"
        src="/assets/Heroimage/Imagehero2.svg"
        alt="Phone Header Light"
      />

      <img
        className="hidden dark:block w-full h-auto object-contain"
        src="/assets/Heroimage/Imagehero1.svg"
        alt="Phone Header Dark"
      />
    </div>
  );
}
