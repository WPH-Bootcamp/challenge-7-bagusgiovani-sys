import LogoCompany from "./LogoCompany";
import { CompanyLogo } from "../../constant/AllData";

export default function TrustedLogo() {
  return (
    <section id="about" className="dark:bg-black flex flex-col mt-10.75 px-4 md:px-35">
      <p className="dark:text-white font-bold text-center text-base md:text-2xl leading-7.5 md:leading-9">
        Trusted by Global Innovators & Leading Brands
      </p>

      <LogoCompany logos={CompanyLogo} />
    </section>
  );
}
