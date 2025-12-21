import type { TrustedLogo } from "../../constant/AllData";

type LogoCompanyProps = {
  logos: TrustedLogo[];
};

export default function LogoCompany({ logos }: LogoCompanyProps) {
  return (
    <>
      <div className="group relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="h-32 md:h-50 py-10 flex w-max animate-marquee gap-16 will-change-transform group-hover:[animation-play-state:return]">
          <ul className="flex items-center gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <li key={index}>
                <img
                  key={`${logo.name}-${index}`}
                  src={logo.src}
                  alt={logo.name}
                  className="company-logo mix-blend-luminosity"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}