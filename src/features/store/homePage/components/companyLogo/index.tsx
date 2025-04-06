import { COMPANIES_LOGOS } from "@/shared/constants/store/homePage/compayLogos";
import CompanyLogo from "./CompanyLogo";

export const CompanyLogoList = () => {
  return (
    <div className="w-full mt-24 mb-12 md:mb-32 flex flex-col">
      <h2 className="text-2xl font-medium text-gray-700 text-center mb-10">Selected Brands</h2>
      <div className="flex justify-between items-center md:flex-row md:gap-0 flex-col gap-8">
        {COMPANIES_LOGOS.map((companyLogo, idx) => (
          <CompanyLogo key={idx} {...companyLogo} />
        ))}
      </div>
    </div>
  );
};
