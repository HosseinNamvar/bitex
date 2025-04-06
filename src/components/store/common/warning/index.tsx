import Link from "next/link";

import { LinkedinIcon } from "@/components/icons/svgIcons";

const Warning = () => {
  return (
    <div className="fixed w-screen bottom-5 flex justify-center text-white z-[2]">
      <div className="flex max-w-[90vw] flex-col justify-center items-center gap-3 rounded-md px-3 py-2 bg-blue-500/80 text-sm text-center backdrop-blur-sm">
        <span>This website was created for portfolio purposes and is NOT a real business.</span>
        <div className="flex items-center justify-center gap-3">
          <span>Contact: </span>
          <Link
            href={"https://www.linkedin.com/in/hossein-namvar/"}
            title="My LinkedIn Profile"
            target="_blank"
            className="bg-white flex items-center gap-2 px-2 py-1 rounded-[4px] text-blue-500 transition-colors duration-300"
          >
            <LinkedinIcon width={20} strokeWidth={0} className="fill-blue-400" />
            LinkedIn
          </Link>
          <Link
            href={"mailto:hossein.namvar@gmail.com"}
            title="Send Me an Email!"
            className="bg-white flex items-center gap-2 px-2 py-1 rounded-[4px] text-blue-500 transition-colors duration-300"
          >
            Email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Warning;
