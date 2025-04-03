import Link from "next/link";

type TProps = {
  width: number;
  bgPositionX: number;
  url: string;
};

const HCompanyLogo = ({ bgPositionX, url, width }: TProps) => {
  return (
    <Link
      className="bg-[url('/icons/companiesIcons.png')] h-14 bg-no-repeat bg-[position-y:center] opacity-80 transition-opacity duration-300 hover:opacity-100"
      style={{ width: width, backgroundPositionX: bgPositionX }}
      href={url}
    />
  );
};

export default HCompanyLogo;
