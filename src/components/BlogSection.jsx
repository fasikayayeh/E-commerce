import post1 from "../assets/post__1.webp";
import post2 from "../assets/post__2.webp";
import post3 from "../assets/post__3.webp";
import BlogCard from "./BlogCard";

const Blogdata = [
  {
    id: 1,
    img: post1,
    title: "Healthy Food Healthy Life",
    date: "Aug 27, 2022",
    comment: 8,
  },
  {
    id: 2,
    img: post2,
    title: "Healthy Food Healthy Life",
    date: "Aug 25, 2022",
    comment: 8,
  },
  {
    id: 3,
    img: post3,
    title: "Healthy Food Healthy Life",
    date: "Aug 30, 2022",
    comment: 6,
  },
];

export const BlogSection = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>

      <p className="text-gray-500">
        Present Posts in a best way to highlight interesting moment of your blog.
      </p>
<div className="flex flex-col md:flex-row gap-8 pt-8">
        {Blogdata.map((el) => (
          <BlogCard
            key={el.id}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
};
