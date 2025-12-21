
import HeroText from "./Hero";
import HeroVisual from "./HeroImage";

export default function HeroSection() {
  return (
    <article id="home" className="flex flex-col md:flex-row">
      <HeroText />
      <HeroVisual />
    </article>
  );
}
