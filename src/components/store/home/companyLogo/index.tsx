import Link from "next/link";

interface IProps {
  width: number;
  bgPositionX: number;
  url: string;
}

const HCompanyLogo = ({ bgPositionX, url, width }: IProps) => {
  return (
    <Link
      className="bg-[url('/icons/companiesIcons.png')] h-14 bg-no-repeat bg-[position-y:center] opacity-80 transition-opacity duration-300 hover:opacity-100"
      style={{ width: width, backgroundPositionX: bgPositionX }}
      href={url}
    />
  );
};

export default HCompanyLogo;
