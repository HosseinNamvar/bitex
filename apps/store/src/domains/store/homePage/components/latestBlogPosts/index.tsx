import { BlogCardData } from "@/domains/store/homePage/constants/";

import HomeBlogCard from "./BlogCard";

export const LatestBlogPosts = () => {
  return (
    <div className="w-full mt-14">
      <div className="flex w-full justify-between items-center mb-7">
        <h2 className="text-2xl font-medium text-gray-700">Latest Posts</h2>
      </div>
      <div className="flex gap-6 flex-col md:flex-row">
        {BlogCardData.map((blog, index) => (
          <HomeBlogCard key={index} imgUrl={blog.imgUrl} title={blog.title} shortText={blog.shortText} url={blog.url} />
        ))}
      </div>
    </div>
  );
};
