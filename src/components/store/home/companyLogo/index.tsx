import { COMPANIES_LOGOS } from "@/shared/constants/store/homePage/compayLogos";
import CompanyLogo from "./CompanyLogo";

export const CompanyLogoList = () => {
  return (
    <div className="flex justify-between items-center md:flex-row md:gap-0 flex-col gap-8">
      {COMPANIES_LOGOS.map((companyLogo, idx) => (
        <CompanyLogo key={idx} {...companyLogo} />
      ))}
    </div>
  );
};
