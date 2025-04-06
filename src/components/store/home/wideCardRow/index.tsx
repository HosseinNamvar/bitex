import { TWideCard } from "@/features/store/homePage/types/wideCard";
import WideAd from "../wideAd";

type TProps = {
  cards: TWideCard[];
};

export const WideCardRow = ({ cards }: TProps) => {
  return (
    <div className="w-full mt-15 flex flex-col gap-4 md:flex-row">
      {cards.map((card, idx) => {
        const { imgUrl, smallTitle, title, url } = card;
        return <WideAd key={`${idx}-${title}`} imgUrl={imgUrl} smallTitle={smallTitle} title={title} url={url} />;
      })}
    </div>
  );
};
