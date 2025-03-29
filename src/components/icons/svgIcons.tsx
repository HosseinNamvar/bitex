type TProps = {
  width: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
};

type TSvgProperties = {
  width: number;
  viewBox: string;
  svgData: JSX.Element;
  fill?: string;
  stroke?: string;
  style?: Object;
};

const createIcon = ({ width, svgData, viewBox, fill }: TSvgProperties) => {
  return (
    <svg width={width} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
      {svgData}
    </svg>
  );
};

// ------------------------ ICON COLLECTIONS ------------------------

export const Advantages = ({ width, fill, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 12 12",
    svgData: (
      <path
        d="M6 0C2.68548 0 0 2.68548 0 6C0 9.31452 2.68548 12 6 12C9.31452 12 12 9.31452 12 6C12 2.68548 9.31452 0 6 0ZM9.48387 6.67742C9.48387 6.8371 9.35323 6.96774 9.19355 6.96774H6.96774V9.19355C6.96774 9.35323 6.8371 9.48387 6.67742 9.48387H5.32258C5.1629 9.48387 5.03226 9.35323 5.03226 9.19355V6.96774H2.80645C2.64677 6.96774 2.51613 6.8371 2.51613 6.67742V5.32258C2.51613 5.1629 2.64677 5.03226 2.80645 5.03226H5.03226V2.80645C5.03226 2.64677 5.1629 2.51613 5.32258 2.51613H6.67742C6.8371 2.51613 6.96774 2.64677 6.96774 2.80645V5.03226H9.19355C9.35323 5.03226 9.48387 5.1629 9.48387 5.32258V6.67742Z"
        fill={fill}
        className={className}
      />
    ),
  });
};

export const ArrowIcon = ({ width, stroke, strokeWidth = 1.2, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 6 10",
    svgData: (
      <path
        d="M1 1L5 5L1 9"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    ),
  });
};

export const ShoppingIconFill = ({ width, fill, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 16 16",
    svgData: (
      <path
        d="M12.8 12.8C11.912 12.8 11.2 13.512 11.2 14.4C11.2 14.8243 11.3686 15.2313 11.6686 15.5314C11.9687 15.8314 12.3757 16 12.8 16C13.2243 16 13.6313 15.8314 13.9314 15.5314C14.2314 15.2313 14.4 14.8243 14.4 14.4C14.4 13.9757 14.2314 13.5687 13.9314 13.2686C13.6313 12.9686 13.2243 12.8 12.8 12.8ZM0 0V1.6H1.6L4.48 7.672L3.392 9.632C3.272 9.856 3.2 10.12 3.2 10.4C3.2 10.8243 3.36857 11.2313 3.66863 11.5314C3.96869 11.8314 4.37565 12 4.8 12H14.4V10.4H5.136C5.08296 10.4 5.03209 10.3789 4.99458 10.3414C4.95707 10.3039 4.936 10.253 4.936 10.2C4.936 10.16 4.944 10.128 4.96 10.104L5.68 8.8H11.64C12.24 8.8 12.768 8.464 13.04 7.976L15.904 2.8C15.96 2.672 16 2.536 16 2.4C16 2.18783 15.9157 1.98434 15.7657 1.83431C15.6157 1.68429 15.4122 1.6 15.2 1.6H3.368L2.616 0M4.8 12.8C3.912 12.8 3.2 13.512 3.2 14.4C3.2 14.8243 3.36857 15.2313 3.66863 15.5314C3.96869 15.8314 4.37565 16 4.8 16C5.22435 16 5.63131 15.8314 5.93137 15.5314C6.23143 15.2313 6.4 14.8243 6.4 14.4C6.4 13.9757 6.23143 13.5687 5.93137 13.2686C5.63131 12.9686 5.22435 12.8 4.8 12.8Z"
        fill={fill}
        className={className}
      />
    ),
  });
};

export const CheckIcon = ({ width, stroke, strokeWidth, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 10 8",
    svgData: (
      <path
        d="M9 1L3.66667 7L1 4"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    ),
  });
};

export const ShoppingIconOutline = ({ width, fill, stroke, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 24 24",
    svgData: (
      <>
        <path
          d="M0 1H1.76393C2.52148 1 3.214 1.428 3.55279 2.10557L8.25 11.5M4.5 3.5H21.2516C22.025 3.5 22.5057 4.34039 22.1135 5.00702L18.58 11.014C18.2206 11.6249 17.5648 12 16.8561 12H8.5L8.25 11.5M8.25 11.5L6.4125 14.44C5.57994 15.7721 6.53762 17.5 8.1085 17.5H21"
          stroke={stroke}
          strokeWidth="1.7"
          className={className}
        />
        <path
          d="M11.4286 22C11.4286 22.837 10.7645 23.5 9.96429 23.5C9.16404 23.5 8.5 22.837 8.5 22C8.5 21.163 9.16404 20.5 9.96429 20.5C10.7645 20.5 11.4286 21.163 11.4286 22ZM20.5 22C20.5 22.837 19.836 23.5 19.0357 23.5C18.2355 23.5 17.5714 22.837 17.5714 22C17.5714 21.163 18.2355 20.5 19.0357 20.5C19.836 20.5 20.5 21.163 20.5 22Z"
          fill={fill}
          stroke={stroke}
          className={className}
        />
      </>
    ),
  });
};

export const ShoppingIconEmpty = ({ width, fill, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 37 31",
    svgData: (
      <path
        d="M7.8457 4.05169L7.18281 4.27656L7.18281 4.27656L7.8457 4.05169ZM14.391 30.7C14.7776 30.7 15.091 30.3866 15.091 30C15.091 29.6134 14.7776 29.3 14.391 29.3V30.7ZM9.70716 29.9866L9.63087 30.6825L9.63386 30.6828L9.70716 29.9866ZM7.73892 27.303L7.06235 27.1234C7.05965 27.1336 7.05717 27.1438 7.05493 27.1541L7.73892 27.303ZM7.9228 26.7185L8.58045 26.9587L8.58481 26.946L7.9228 26.7185ZM8.16344 26.0493L8.80704 26.3246L8.8077 26.323L8.16344 26.0493ZM12.0182 23.3188L11.9718 22.6204L11.9674 22.6207L12.0182 23.3188ZM24.9718 24.0077C25.3584 24.0077 25.6718 23.6943 25.6718 23.3077C25.6718 22.9211 25.3584 22.6077 24.9718 22.6077V24.0077ZM11.8457 22.5715L12.2266 21.9842L12.226 21.9839L11.8457 22.5715ZM8.99208 17.9003L9.63371 17.6205L9.63362 17.6203L8.99208 17.9003ZM8.60842 17.0214L7.96679 17.3012L7.96688 17.3014L8.60842 17.0214ZM6.86039 9.19585L6.27977 8.80485L6.27869 8.80646L6.86039 9.19585ZM35.6711 9.35869L36.274 9.00304L36.2737 9.00243L35.6711 9.35869ZM32.7698 17.704L32.1648 17.352L32.1642 17.353L32.7698 17.704ZM32.1274 18.8127L32.7324 19.1647L32.733 19.1637L32.1274 18.8127ZM29.1557 22.7054L28.8094 22.0971L28.8088 22.0974L29.1557 22.7054ZM22.087 30.7C22.4736 30.7 22.787 30.3866 22.787 30C22.787 29.6134 22.4736 29.3 22.087 29.3V30.7ZM18.0252 29.3C17.6386 29.3 17.3252 29.6134 17.3252 30C17.3252 30.3866 17.6386 30.7 18.0252 30.7V29.3ZM31.8261 30.7C32.2127 30.7 32.5261 30.3866 32.5261 30C32.5261 29.6134 32.2127 29.3 31.8261 29.3V30.7ZM27.7643 29.3C27.3777 29.3 27.0643 29.6134 27.0643 30C27.0643 30.3866 27.3777 30.7 27.7643 30.7V29.3ZM0 1.7H3.53692V0.3H0V1.7ZM3.53692 1.7C4.3428 1.7 4.8894 1.70102 5.31071 1.74833C5.71483 1.79371 5.93163 1.8755 6.09695 1.99269L6.90657 0.850539C6.47712 0.546116 6.00152 0.417101 5.46692 0.357074C4.94952 0.298977 4.31108 0.3 3.53692 0.3V1.7ZM6.09695 1.99269C6.26149 2.10933 6.40695 2.28339 6.57681 2.64217C6.75472 3.01797 6.92786 3.52498 7.18281 4.27656L8.5086 3.82682C8.26412 3.10609 8.06267 2.50888 7.84217 2.04312C7.61361 1.56034 7.33682 1.15552 6.90657 0.850539L6.09695 1.99269ZM7.18281 4.27656L8.41778 7.91718L9.74358 7.46744L8.5086 3.82682L7.18281 4.27656ZM14.391 29.3H10.3292V30.7H14.391V29.3ZM10.3292 29.3C9.98018 29.3 9.86141 29.299 9.78045 29.2905L9.63386 30.6828C9.80716 30.701 10.0198 30.7 10.3292 30.7V29.3ZM9.78344 29.2908C9.5637 29.2667 9.35208 29.1977 9.16225 29.0887L8.46526 30.3029C8.82313 30.5083 9.2202 30.6374 9.63087 30.6824L9.78344 29.2908ZM9.16225 29.0887C8.97243 28.9797 8.8089 28.8334 8.68162 28.6599L7.5527 29.4879C7.7963 29.82 8.10735 30.0974 8.46526 30.3029L9.16225 29.0887ZM8.68162 28.6599C8.55437 28.4864 8.46604 28.2893 8.42167 28.0816L7.05255 28.374C7.13847 28.7763 7.30908 29.1557 7.5527 29.4879L8.68162 28.6599ZM8.42167 28.0816C8.3773 27.8739 8.37772 27.6594 8.4229 27.4519L7.05493 27.1541C6.96744 27.5561 6.96662 27.9717 7.05255 28.374L8.42167 28.0816ZM8.41549 27.4826C8.46246 27.3056 8.51746 27.1308 8.58033 26.9586L7.26527 26.4784C7.1879 26.6903 7.12019 26.9055 7.06235 27.1234L8.41549 27.4826ZM8.58481 26.946C8.70888 26.5849 8.75424 26.448 8.80704 26.3246L7.51984 25.774C7.44097 25.9584 7.37282 26.1651 7.2608 26.4911L8.58481 26.946ZM8.8077 26.323C9.07962 25.683 9.52738 25.1279 10.1029 24.7202L9.29367 23.5778C8.50833 24.134 7.89358 24.8944 7.51918 25.7756L8.8077 26.323ZM10.1029 24.7202C10.6785 24.3125 11.359 24.0686 12.069 24.017L11.9674 22.6207C11.0044 22.6907 10.0789 23.0216 9.29367 23.5778L10.1029 24.7202ZM12.0646 24.0173C12.2038 24.0081 12.36 24.0077 12.7378 24.0077V22.6077C12.3801 22.6077 12.1685 22.6073 11.9718 22.6204L12.0646 24.0173ZM12.7378 24.0077H24.9718V22.6077H12.7378V24.0077ZM24.2431 22.6077H17.3395V24.0077H24.2431V22.6077ZM17.3395 22.6077C15.8717 22.6077 14.8253 22.6068 14.0023 22.5196C13.1955 22.4341 12.6683 22.2707 12.2266 21.9842L11.4648 23.1588C12.1581 23.6085 12.925 23.8132 13.8548 23.9118C14.7685 24.0086 15.9014 24.0077 17.3395 24.0077V22.6077ZM12.226 21.9839C11.7839 21.6977 11.425 21.2876 11.0289 20.5958C10.624 19.8887 10.2119 18.9461 9.63371 17.6205L8.35045 18.1801C8.91644 19.4779 9.36242 20.5028 9.81397 21.2915C10.2743 22.0954 10.7701 22.7092 11.4653 23.1592L12.226 21.9839ZM9.63362 17.6203L9.24996 16.7413L7.96688 17.3014L8.35054 18.1803L9.63362 17.6203ZM9.25005 16.7415C8.32124 14.6119 7.65922 13.0891 7.34293 11.9108C7.03041 10.7464 7.10411 10.0901 7.44209 9.58523L6.27869 8.80646C5.60871 9.80732 5.63702 10.9557 5.99079 12.2737C6.3408 13.5776 7.05677 15.2147 7.96679 17.3012L9.25005 16.7415ZM7.44101 9.58684C7.78306 9.07891 8.37716 8.75026 9.59676 8.57297C10.8273 8.39408 12.5154 8.39231 14.8695 8.39231V6.99231C12.5608 6.99231 10.7505 6.99053 9.39536 7.18753C8.02923 7.38612 6.95022 7.80925 6.27977 8.80485L7.44101 9.58684ZM14.8695 8.39231H26.856V6.99231H14.8695V8.39231ZM26.856 8.39231C29.49 8.39231 31.3858 8.39411 32.7511 8.59327C34.1123 8.79184 34.7402 9.15963 35.0686 9.71496L36.2737 9.00243C35.6167 7.89136 34.4478 7.42596 32.9532 7.20794C31.4626 6.9905 29.4435 6.99231 26.856 6.99231V8.39231ZM35.0682 9.71435C35.393 10.2649 35.4076 10.9738 34.9098 12.2283C34.4094 13.4892 33.4719 15.1051 32.1648 17.352L33.3749 18.056C34.658 15.8503 35.6626 14.1267 36.2111 12.7447C36.7621 11.3563 36.9322 10.1188 36.274 9.00304L35.0682 9.71435ZM32.1642 17.353L31.5217 18.4617L32.733 19.1637L33.3755 18.055L32.1642 17.353ZM31.5223 18.4607C30.8775 19.569 30.4187 20.3562 29.9926 20.9452C29.5759 21.5214 29.2216 21.8624 28.8094 22.0971L29.5021 23.3137C30.1478 22.9461 30.6413 22.4372 31.127 21.7657C31.6033 21.1072 32.1015 20.2492 32.7324 19.1647L31.5223 18.4607ZM28.8088 22.0974C28.3971 22.3323 27.9182 22.4659 27.1995 22.5357C26.4662 22.6069 25.5414 22.6077 24.2431 22.6077V24.0077C25.5146 24.0077 26.5183 24.0085 27.3349 23.9291C28.1662 23.8484 28.8587 23.6808 29.5026 23.3134L28.8088 22.0974ZM22.087 29.3H18.0252V30.7H22.087V29.3ZM31.8261 29.3H27.7643V30.7H31.8261V29.3Z"
        fill={fill}
        className={className}
      />
    ),
  });
};

export const PlusIcon = ({ width, stroke, strokeWidth, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 12 12",
    svgData: (
      <>
        <line
          x1="1"
          y1="6"
          x2="11"
          y2="6"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={className}
        />
        <line
          x1="6"
          y1="1"
          x2="6"
          y2="12"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={className}
        />
      </>
    ),
  });
};

export const MinusIcon = ({ width, strokeWidth, stroke, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 12 2",
    svgData: (
      <line
        x1="1"
        y1="1"
        x2="11"
        y2="1"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={className}
      />
    ),
  });
};

export const StarIcon = ({ width, fill, strokeWidth, stroke, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 17 17",
    svgData: (
      <path
        d="M15.9604 6.38501C15.9132 6.24618 15.8264 6.12419 15.7108 6.0341C15.5951 5.94402 15.4555 5.88978 15.3094 5.87808L11.0336 5.53837L9.18332 1.44317C9.12439 1.31127 9.02855 1.19924 8.90735 1.1206C8.78615 1.04197 8.64479 1.00008 8.50031 1C8.35583 0.999921 8.21441 1.04165 8.09313 1.12016C7.97185 1.19866 7.87588 1.31058 7.81681 1.44242L5.96655 5.53837L1.69077 5.87808C1.54711 5.88946 1.40978 5.94198 1.29519 6.02936C1.1806 6.11674 1.09361 6.23527 1.04464 6.37079C0.995665 6.5063 0.986773 6.65305 1.01903 6.79349C1.05128 6.93392 1.12332 7.06209 1.22652 7.16266L4.38629 10.2425L3.26878 15.0809C3.23485 15.2273 3.24573 15.3806 3.3 15.5208C3.35427 15.661 3.44943 15.7816 3.57314 15.8671C3.69684 15.9525 3.84338 15.9988 3.99373 16C4.14407 16.0011 4.2913 15.9571 4.41629 15.8735L8.50006 13.1514L12.5838 15.8735C12.7116 15.9583 12.8623 16.002 13.0156 15.9986C13.1689 15.9953 13.3175 15.945 13.4414 15.8547C13.5653 15.7644 13.6586 15.6383 13.7087 15.4934C13.7588 15.3484 13.7633 15.1917 13.7216 15.0441L12.3498 10.2448L15.7519 7.18366C15.9746 6.98268 16.0564 6.66922 15.9604 6.38501Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={className}
      />
    ),
  });
};

export const HeartIcon = ({ width, fill, strokeWidth, stroke, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 22 19",
    svgData: (
      <path
        d="M11 3.86445C11.1593 3.86445 11.3091 3.7885 11.4033 3.65998L11.4035 3.65979L11.4039 3.65923L11.4078 3.65392L11.4261 3.62974C11.4428 3.60779 11.4686 3.57446 11.5029 3.5314C11.5715 3.44522 11.6742 3.32031 11.8072 3.16959C12.0738 2.86749 12.4592 2.4652 12.9338 2.06413C13.8979 1.24947 15.1588 0.5 16.5 0.5C19.2566 0.5 21.5 2.757 21.5 5.55134C21.5 6.71806 21.2747 8.7176 19.8992 11.1504C18.5225 13.5855 15.9782 16.4815 11.2989 19.4146C11.2081 19.4708 11.1047 19.5 11 19.5C10.8953 19.5 10.7919 19.4708 10.7011 19.4146C6.02184 16.4815 3.47754 13.5855 2.10079 11.1504C0.725304 8.7176 0.5 6.71806 0.5 5.55134C0.5 2.757 2.74337 0.5 5.5 0.5C6.84118 0.5 8.10214 1.24947 9.06619 2.06413C9.54081 2.4652 9.92622 2.86749 10.1928 3.16959C10.3258 3.32031 10.4285 3.44522 10.4971 3.5314C10.5314 3.57446 10.5572 3.60779 10.5739 3.62974L10.5922 3.65392L10.5961 3.65923L10.5965 3.65979C10.5966 3.65986 10.5966 3.65992 10.5967 3.65998L10.5967 3.66003C10.6909 3.78852 10.8407 3.86445 11 3.86445Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    ),
  });
};

export const LikeIcon = ({ width, strokeWidth, stroke, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 18 18",
    svgData: (
      <path
        d="M5.06449 16.9999H2.6258C2.19461 16.9999 1.78108 16.8313 1.47618 16.5313C1.17129 16.2312 1 15.8243 1 15.3999V9.79994C1 9.3756 1.17129 8.96864 1.47618 8.66858C1.78108 8.36852 2.19461 8.19995 2.6258 8.19995H5.06449M10.7548 6.59996V3.39998C10.7548 2.76347 10.4979 2.15302 10.0405 1.70294C9.58316 1.25285 8.96287 1 8.31609 1L5.06449 8.19995V16.9999H14.234C14.6261 17.0043 15.0066 16.869 15.3053 16.6191C15.6041 16.3692 15.801 16.0214 15.8598 15.6399L16.9816 8.43995C17.017 8.21064 17.0012 7.9765 16.9355 7.75376C16.8698 7.53102 16.7557 7.325 16.601 7.14997C16.4464 6.97495 16.2549 6.83511 16.0399 6.74014C15.8249 6.64517 15.5915 6.59734 15.3558 6.59996H10.7548Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    ),
  });
};

export const LinkedinIcon = ({ width, fill, strokeWidth, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 20 20",
    svgData: (
      <path
        d="M18.5211 0.000139831H1.47887C1.2873 -0.00250479 1.09708 0.0323873 0.91908 0.102824C0.741077 0.17326 0.578776 0.27786 0.441446 0.410652C0.304116 0.543443 0.194448 0.701824 0.118704 0.876749C0.0429602 1.05167 0.00262414 1.23972 0 1.43014V18.5701C0.00262414 18.7606 0.0429602 18.9486 0.118704 19.1235C0.194448 19.2985 0.304116 19.4568 0.441446 19.5896C0.578776 19.7224 0.741077 19.827 0.91908 19.8975C1.09708 19.9679 1.2873 20.0028 1.47887 20.0001H18.5211C18.7127 20.0028 18.9029 19.9679 19.0809 19.8975C19.2589 19.827 19.4212 19.7224 19.5586 19.5896C19.6959 19.4568 19.8056 19.2985 19.8813 19.1235C19.957 18.9486 19.9974 18.7606 20 18.5701V1.43014C19.9974 1.23972 19.957 1.05167 19.8813 0.876749C19.8056 0.701824 19.6959 0.543443 19.5586 0.410652C19.4212 0.27786 19.2589 0.17326 19.0809 0.102824C18.9029 0.0323873 18.7127 -0.00250479 18.5211 0.000139831ZM6.0664 16.7401H3.04829V7.74014H6.0664V16.7401ZM4.55734 6.48014C4.14111 6.48014 3.74192 6.31578 3.4476 6.02323C3.15328 5.73067 2.98793 5.33388 2.98793 4.92014C2.98793 4.5064 3.15328 4.10961 3.4476 3.81705C3.74192 3.5245 4.14111 3.36014 4.55734 3.36014C4.77837 3.33522 5.00219 3.35699 5.21416 3.42402C5.42613 3.49105 5.62147 3.60183 5.78738 3.7491C5.95329 3.89637 6.08604 4.07682 6.17693 4.27862C6.26782 4.48043 6.31481 4.69904 6.31481 4.92014C6.31481 5.14124 6.26782 5.35985 6.17693 5.56166C6.08604 5.76346 5.95329 5.94391 5.78738 6.09118C5.62147 6.23845 5.42613 6.34923 5.21416 6.41626C5.00219 6.48329 4.77837 6.50505 4.55734 6.48014ZM16.9517 16.7401H13.9336V11.9101C13.9336 10.7001 13.501 9.91014 12.4044 9.91014C12.0651 9.91261 11.7346 10.0184 11.4576 10.2133C11.1806 10.4082 10.9703 10.6828 10.8551 11.0001C10.7764 11.2352 10.7423 11.4827 10.7545 11.7301V16.7301H7.73642V7.73014H10.7545V9.00014C11.0287 8.52725 11.4275 8.13766 11.9079 7.87334C12.3883 7.60902 12.9322 7.47999 13.4809 7.50014C15.493 7.50014 16.9517 8.79014 16.9517 11.5601V16.7401Z"
        fill={fill}
        strokeWidth={strokeWidth}
        className={className}
      />
    ),
  });
};

export const XIcon = ({ width, stroke, strokeWidth, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 19 20",
    svgData: (
      <>
        <path
          d="M14.393 18.768L1.12802 1.968C1.0581 1.87931 1.01485 1.77307 1.00319 1.66137C0.991535 1.54967 1.01193 1.43698 1.06206 1.33613C1.11219 1.23528 1.19005 1.15032 1.28677 1.09089C1.3835 1.03147 1.49521 0.99998 1.6092 1H4.12678C4.21946 1.00014 4.31089 1.0211 4.3941 1.06131C4.47731 1.10151 4.55011 1.15989 4.60695 1.232L17.872 18.032C17.9419 18.1207 17.9851 18.2269 17.9968 18.3386C18.0085 18.4503 17.9881 18.563 17.9379 18.6639C17.8878 18.7647 17.81 18.8497 17.7132 18.9091C17.6165 18.9685 17.5048 19 17.3908 19H14.8732C14.7805 18.9999 14.6891 18.9789 14.6059 18.9387C14.5227 18.8985 14.4499 18.8401 14.393 18.768Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          className={className}
        />
        <path
          d="M17.6212 1L1.3787 19"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={className}
        />
      </>
    ),
  });
};

export const InstagramIcon = ({ width, fill, strokeWidth, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 20 20",
    svgData: (
      <path
        d="M15.34 3.46C15.1027 3.46 14.8707 3.53038 14.6733 3.66224C14.476 3.79409 14.3222 3.98151 14.2313 4.20078C14.1405 4.42005 14.1168 4.66133 14.1631 4.89411C14.2094 5.12689 14.3236 5.34071 14.4915 5.50853C14.6593 5.67635 14.8731 5.79064 15.1059 5.83694C15.3387 5.88324 15.5799 5.85948 15.7992 5.76866C16.0185 5.67783 16.2059 5.52402 16.3378 5.32668C16.4696 5.12935 16.54 4.89734 16.54 4.66C16.54 4.34174 16.4136 4.03652 16.1885 3.81147C15.9635 3.58643 15.6583 3.46 15.34 3.46ZM19.94 5.88C19.9206 5.0503 19.7652 4.2294 19.48 3.45C19.2257 2.78313 18.83 2.17928 18.32 1.68C17.8248 1.16743 17.2196 0.774176 16.55 0.53C15.7727 0.236161 14.9508 0.07721 14.12 0.0599999C13.06 -5.58794e-08 12.72 0 10 0C7.28 0 6.94 -5.58794e-08 5.88 0.0599999C5.04915 0.07721 4.22734 0.236161 3.45 0.53C2.78168 0.776649 2.17693 1.16956 1.68 1.68C1.16743 2.17518 0.774176 2.78044 0.53 3.45C0.236161 4.22734 0.07721 5.04915 0.0599999 5.88C-5.58794e-08 6.94 0 7.28 0 10C0 12.72 -5.58794e-08 13.06 0.0599999 14.12C0.07721 14.9508 0.236161 15.7727 0.53 16.55C0.774176 17.2196 1.16743 17.8248 1.68 18.32C2.17693 18.8304 2.78168 19.2234 3.45 19.47C4.22734 19.7638 5.04915 19.9228 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.9508 19.9228 15.7727 19.7638 16.55 19.47C17.2196 19.2258 17.8248 18.8326 18.32 18.32C18.8322 17.8226 19.2283 17.2182 19.48 16.55C19.7652 15.7706 19.9206 14.9497 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88ZM18.14 14C18.1327 14.6348 18.0178 15.2637 17.8 15.86C17.6403 16.2952 17.3839 16.6884 17.05 17.01C16.7256 17.3405 16.3332 17.5964 15.9 17.76C15.3037 17.9778 14.6748 18.0927 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.38089 18.1123 4.72459 18.0109 4.1 17.8C3.68578 17.6281 3.31136 17.3728 3 17.05C2.66809 16.7287 2.41484 16.3352 2.26 15.9C2.01586 15.2952 1.88044 14.6519 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.86448 5.35106 1.98295 4.70795 2.21 4.1C2.38605 3.67791 2.65627 3.30166 3 3C3.30381 2.65617 3.67929 2.3831 4.1 2.2C4.70955 1.98004 5.352 1.86508 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.6348 1.86728 15.2637 1.98225 15.86 2.2C16.3144 2.36865 16.7223 2.64285 17.05 3C17.3777 3.30718 17.6338 3.68273 17.8 4.1C18.0223 4.70893 18.1373 5.35178 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.98581 4.87198 7.99496 5.17453 7.15265 5.73942C6.31035 6.30431 5.65438 7.1062 5.26763 8.04375C4.88089 8.98131 4.78072 10.0125 4.97979 11.0069C5.17886 12.0014 5.66824 12.9145 6.38608 13.631C7.10392 14.3474 8.01801 14.835 9.01286 15.0321C10.0077 15.2293 11.0387 15.1271 11.9755 14.7385C12.9123 14.35 13.7129 13.6924 14.2761 12.849C14.8394 12.0056 15.14 11.0142 15.14 10C15.1413 9.3251 15.0092 8.65661 14.7512 8.03296C14.4933 7.40931 14.1146 6.84281 13.6369 6.36605C13.1592 5.88929 12.5919 5.51168 11.9678 5.25493C11.3436 4.99818 10.6749 4.86736 10 4.87ZM10 13.33C9.34139 13.33 8.69757 13.1347 8.14995 12.7688C7.60234 12.4029 7.17552 11.8828 6.92348 11.2743C6.67144 10.6659 6.6055 9.99631 6.73398 9.35035C6.86247 8.70439 7.17963 8.11104 7.64533 7.64533C8.11104 7.17963 8.70439 6.86247 9.35035 6.73398C9.99631 6.6055 10.6659 6.67144 11.2743 6.92348C11.8828 7.17552 12.4029 7.60234 12.7688 8.14995C13.1347 8.69757 13.33 9.34139 13.33 10C13.33 10.4373 13.2439 10.8703 13.0765 11.2743C12.9092 11.6784 12.6639 12.0454 12.3547 12.3547C12.0454 12.6639 11.6784 12.9092 11.2743 13.0765C10.8703 13.2439 10.4373 13.33 10 13.33Z"
        fill={fill}
        strokeWidth={strokeWidth}
        className={className}
      />
    ),
  });
};

export const FacebookIcon = ({ width, fill, strokeWidth, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 20 20",
    svgData: (
      <path
        d="M20 10.0251C20 4.49123 15.52 0 10 0C4.48 0 0 4.49123 0 10.0251C0 14.8772 3.44 18.9173 8 19.8496V13.0326H6V10.0251H8V7.5188C8 5.58396 9.57 4.01003 11.5 4.01003H14V7.01754H12C11.45 7.01754 11 7.46867 11 8.02005V10.0251H14V13.0326H11V20C16.05 19.4987 20 15.2281 20 10.0251Z"
        fill={fill}
        strokeWidth={strokeWidth}
        className={className}
      />
    ),
  });
};

export const SearchIcon = ({ width, stroke, strokeWidth, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 18 18",
    svgData: (
      <path
        d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789Z"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={className}
      />
    ),
  });
};

export const ClockIcon = ({ width, fill, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 14 14",
    svgData: (
      <>
        <path
          d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 12.8125C3.79063 12.8125 1.1875 10.2094 1.1875 7C1.1875 3.79063 3.79063 1.1875 7 1.1875C10.2094 1.1875 12.8125 3.79063 12.8125 7C12.8125 10.2094 10.2094 12.8125 7 12.8125Z"
          fill={fill}
          className={className}
        />
        <path
          d="M9.72969 8.97812L7.50156 7.36719V3.5C7.50156 3.43125 7.44531 3.375 7.37656 3.375H6.625C6.55625 3.375 6.5 3.43125 6.5 3.5V7.80313C6.5 7.84375 6.51875 7.88125 6.55156 7.90469L9.13594 9.78906C9.19219 9.82969 9.27031 9.81719 9.31094 9.7625L9.75781 9.15312C9.79844 9.09531 9.78594 9.01719 9.72969 8.97812Z"
          fill={fill}
          className={className}
        />
      </>
    ),
  });
};

export const ListIcon = ({ width, fill, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 12 12",
    svgData: (
      <path
        d="M11.5714 5.14286H0.428572C0.314907 5.14286 0.205898 5.0977 0.125525 5.01733C0.0451527 4.93696 0 4.82795 0 4.71429V3.85714C0 3.74348 0.0451527 3.63447 0.125525 3.5541C0.205898 3.47372 0.314907 3.42857 0.428572 3.42857H11.5714C11.6851 3.42857 11.7941 3.47372 11.8745 3.5541C11.9548 3.63447 12 3.74348 12 3.85714V4.71429C12 4.82795 11.9548 4.93696 11.8745 5.01733C11.7941 5.0977 11.6851 5.14286 11.5714 5.14286ZM0.428572 10.2857H11.5714C11.6851 10.2857 11.7941 10.3309 11.8745 10.4112C11.9548 10.4916 12 10.6006 12 10.7143V11.5714C12 11.6851 11.9548 11.7941 11.8745 11.8745C11.7941 11.9548 11.6851 12 11.5714 12H0.428572C0.314907 12 0.205898 11.9548 0.125525 11.8745C0.0451527 11.7941 0 11.6851 0 11.5714V10.7143C0 10.6006 0.0451527 10.4916 0.125525 10.4112C0.205898 10.3309 0.314907 10.2857 0.428572 10.2857ZM0.34366 1.0456e-07H7.37063C7.41576 -3.51199e-05 7.46047 0.00882984 7.50218 0.0260879C7.54389 0.043346 7.58179 0.0686586 7.61371 0.100577C7.64563 0.132496 7.67094 0.170395 7.6882 0.212106C7.70546 0.253817 7.71432 0.298521 7.71429 0.343661V1.37063C7.71432 1.41577 7.70546 1.46047 7.6882 1.50218C7.67094 1.54389 7.64563 1.58179 7.61371 1.61371C7.58179 1.64563 7.54389 1.67094 7.50218 1.6882C7.46047 1.70546 7.41576 1.71432 7.37063 1.71429H0.34366C0.29852 1.71432 0.253817 1.70546 0.212106 1.6882C0.170395 1.67094 0.132496 1.64563 0.100577 1.61371C0.0686579 1.58179 0.0433455 1.54389 0.0260878 1.50218C0.00882912 1.46047 -3.52859e-05 1.41577 0 1.37063V0.343661C-3.52859e-05 0.298521 0.00882912 0.253817 0.0260878 0.212106C0.0433455 0.170395 0.0686579 0.132496 0.100577 0.100577C0.132496 0.0686586 0.170395 0.043346 0.212106 0.0260879C0.253817 0.00882984 0.29852 -3.51199e-05 0.34366 1.0456e-07ZM0.34366 6.85714H7.37063C7.41576 6.85711 7.46047 6.86597 7.50218 6.88323C7.54389 6.90049 7.58179 6.9258 7.61371 6.95772C7.64563 6.98964 7.67094 7.02754 7.6882 7.06925C7.70546 7.11096 7.71432 7.15566 7.71429 7.2008V8.22777C7.71432 8.27291 7.70546 8.31761 7.6882 8.35932C7.67094 8.40103 7.64563 8.43893 7.61371 8.47085C7.58179 8.50277 7.54389 8.52808 7.50218 8.54534C7.46047 8.5626 7.41576 8.57146 7.37063 8.57143H0.34366C0.29852 8.57146 0.253817 8.5626 0.212106 8.54534C0.170395 8.52808 0.132496 8.50277 0.100577 8.47085C0.0686579 8.43893 0.0433455 8.40103 0.0260878 8.35932C0.00882912 8.31761 -3.52859e-05 8.27291 0 8.22777V7.2008C-3.52859e-05 7.15566 0.00882912 7.11096 0.0260878 7.06925C0.0433455 7.02754 0.0686579 6.98964 0.100577 6.95772C0.132496 6.9258 0.170395 6.90049 0.212106 6.88323C0.253817 6.86597 0.29852 6.85711 0.34366 6.85714Z"
        fill={fill}
        className={className}
      />
    ),
  });
};

export const ProfileIcon = ({ width, fill, stroke, strokeWidth, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 18 20",
    svgData: (
      <path
        d="M17 19C17 16.239 13.418 14 9 14C4.582 14 1 16.239 1 19M9 11C7.67392 11 6.40215 10.4732 5.46447 9.53553C4.52678 8.59785 4 7.32608 4 6C4 4.67392 4.52678 3.40215 5.46447 2.46447C6.40215 1.52678 7.67392 1 9 1C10.3261 1 11.5979 1.52678 12.5355 2.46447C13.4732 3.40215 14 4.67392 14 6C14 7.32608 13.4732 8.59785 12.5355 9.53553C11.5979 10.4732 10.3261 11 9 11Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    ),
  });
};

export const CloseIcon = ({ width, fill, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 18 18",
    svgData: (
      <path
        d="M17.7797 16.8012C17.8477 16.8646 17.9022 16.941 17.9401 17.0259C17.9779 17.1108 17.9983 17.2025 17.9999 17.2955C18.0015 17.3884 17.9844 17.4808 17.9496 17.567C17.9148 17.6532 17.863 17.7315 17.7972 17.7972C17.7315 17.863 17.6532 17.9148 17.567 17.9496C17.4808 17.9844 17.3884 18.0015 17.2955 17.9999C17.2025 17.9983 17.1108 17.9779 17.0259 17.9401C16.941 17.9022 16.8646 17.8477 16.8012 17.7797L8.98273 9.96235L1.16427 17.7797C1.03303 17.9019 0.85945 17.9685 0.680095 17.9654C0.50074 17.9622 0.329615 17.8895 0.202772 17.7627C0.0759294 17.6358 0.00327237 17.4647 0.000107859 17.2854C-0.00305665 17.106 0.0635184 16.9324 0.185808 16.8012L8.00312 8.98273L0.185808 1.16427C0.0635184 1.03303 -0.00305665 0.85945 0.000107859 0.680095C0.00327237 0.50074 0.0759294 0.329615 0.202772 0.202772C0.329615 0.0759294 0.50074 0.00327237 0.680095 0.000107859C0.85945 -0.00305665 1.03303 0.0635184 1.16427 0.185808L8.98273 8.00312L16.8012 0.185808C16.9324 0.0635184 17.106 -0.00305665 17.2854 0.000107859C17.4647 0.00327237 17.6358 0.0759294 17.7627 0.202772C17.8895 0.329615 17.9622 0.50074 17.9654 0.680095C17.9685 0.85945 17.9019 1.03303 17.7797 1.16427L9.96235 8.98273L17.7797 16.8012Z"
        fill={fill}
        className={className}
      />
    ),
  });
};

export const DeleteIcon = ({ width, fill, className }: TProps) => {
  return createIcon({
    width,
    viewBox: "0 0 15 17",
    svgData: (
      <path
        d="M5.79545 2.83333H9.20455C9.20455 2.36368 9.02496 1.91326 8.7053 1.58117C8.38563 1.24907 7.95207 1.0625 7.5 1.0625C7.04793 1.0625 6.61437 1.24907 6.2947 1.58117C5.97504 1.91326 5.79545 2.36368 5.79545 2.83333ZM4.77273 2.83333C4.77273 2.08189 5.06006 1.36122 5.57153 0.829864C6.08299 0.298511 6.77668 0 7.5 0C8.22332 0 8.91701 0.298511 9.42847 0.829864C9.93994 1.36122 10.2273 2.08189 10.2273 2.83333H14.4886C14.6243 2.83333 14.7543 2.8893 14.8502 2.98893C14.9461 3.08856 15 3.22369 15 3.36458C15 3.50548 14.9461 3.64061 14.8502 3.74023C14.7543 3.83986 14.6243 3.89583 14.4886 3.89583H13.5955L12.7657 14.2396C12.7053 14.9921 12.375 15.6935 11.8401 16.2048C11.3053 16.7161 10.605 16.9999 9.87818 17H5.12182C4.39499 16.9999 3.69473 16.7161 3.15989 16.2048C2.62505 15.6935 2.29469 14.9921 2.23432 14.2396L1.40455 3.89583H0.511364C0.375742 3.89583 0.245674 3.83986 0.149775 3.74023C0.0538756 3.64061 0 3.50548 0 3.36458C0 3.22369 0.0538756 3.08856 0.149775 2.98893C0.245674 2.8893 0.375742 2.83333 0.511364 2.83333H4.77273ZM3.25364 14.1511C3.29263 14.638 3.50633 15.0919 3.85237 15.4228C4.19841 15.7537 4.65151 15.9374 5.12182 15.9375H9.87818C10.3485 15.9374 10.8016 15.7537 11.1476 15.4228C11.4937 15.0919 11.7074 14.638 11.7464 14.1511L12.57 3.89583H2.43068L3.25364 14.1511ZM5.96591 6.375C6.10153 6.375 6.2316 6.43097 6.3275 6.5306C6.4234 6.63023 6.47727 6.76535 6.47727 6.90625V12.9271C6.47727 13.068 6.4234 13.2031 6.3275 13.3027C6.2316 13.4024 6.10153 13.4583 5.96591 13.4583C5.83029 13.4583 5.70022 13.4024 5.60432 13.3027C5.50842 13.2031 5.45455 13.068 5.45455 12.9271V6.90625C5.45455 6.76535 5.50842 6.63023 5.60432 6.5306C5.70022 6.43097 5.83029 6.375 5.96591 6.375ZM9.54545 6.90625C9.54545 6.76535 9.49158 6.63023 9.39568 6.5306C9.29978 6.43097 9.16971 6.375 9.03409 6.375C8.89847 6.375 8.7684 6.43097 8.6725 6.5306C8.5766 6.63023 8.52273 6.76535 8.52273 6.90625V12.9271C8.52273 13.068 8.5766 13.2031 8.6725 13.3027C8.7684 13.4024 8.89847 13.4583 9.03409 13.4583C9.16971 13.4583 9.29978 13.4024 9.39568 13.3027C9.49158 13.2031 9.54545 13.068 9.54545 12.9271V6.90625Z"
        fill={fill}
        className={className}
      />
    ),
  });
};
