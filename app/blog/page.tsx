import Posts from "@/components/Posts";

const Blog = () => {
  return (
    <article className="max-w-6xl container p-4 mx-auto m-4 my-10">
      <h1 className="lg:text-center text-3xl lg:text-5xl text-primary font-bold mb-10">
        Latest News
      </h1>
      <Posts />
    </article>
  );
};

export default Blog;
