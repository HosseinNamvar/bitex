import Image from "next/image";
import Link from "next/link";

import { TGroupJSON } from "@/types/categories";
import { cn } from "@/shared/utils/styling";

type TProps = {
  categoryData: TGroupJSON;
  className?: string;
};

const CategoryListItem = ({ categoryData, className }: TProps) => {
  const { categories, group } = { ...categoryData };
  return (
    <li
      className={cn(
        "w-full h-12 flex justify-between items-center relative border-b border-gray-200 cursor-pointer hover:[&_.subCat]:visible hover:[&_.subCat]:opacity-100",
        className
      )}
    >
      <Link href={"/list/" + group.url} className="text-gray-700 transition-colors duration-300 hover:text-gray-900">
        <div className="w-7 inline-block">
          <Image
            src={"/icons/" + group.iconUrl + ".svg"}
            alt={group.name}
            width={group.iconSize[0]}
            height={group.iconSize[1]}
          />
        </div>
        {group.name}
      </Link>
      <div>
        {categories && categories.length > 0 && (
          <Image className={"styles.arrow"} src={"/icons/arrowIcon01.svg"} width={6} height={10} alt="" />
        )}
      </div>
      {!!categories?.length && (
        <div className="w-[300px] subCat absolute z-[12] left-56 top-0 flex flex-col p-3 bg-white rounded-lg overflow-hidden shadow-md transition-all duration-400 invisible opacity-0">
          {categories.map((item, index) => (
            <div className="w-full flex flex-col" key={index}>
              <Link
                href={"/list/" + group.url + "/" + item.category.url}
                className="text-gray-900 px-3 py-2 border border-white rounded-md transition-all duration-300 hover:border-gray-200 hover:bg-gray-100"
              >
                {item.category.name}
              </Link>
              {item?.subCategories?.length ? (
                <div className="flex flex-col">
                  {item.subCategories.map((link, index) => (
                    <Link
                      key={index}
                      href={"/list/" + group.url + "/" + item.category.url + "/" + link.url}
                      className="text-gray-500 px-3 py-2 border border-white rounded-md transition-all duration-300 text-sm hover:text-gray-700 hover:border-gray-200 hover:bg-gray-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default CategoryListItem;
