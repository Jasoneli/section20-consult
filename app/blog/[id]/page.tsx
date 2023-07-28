import getFormattedDate from "@/lib/getFormatteddate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

const generateMetadata = ({ params }: { params: { id: string } }) => {
  const posts = getSortedPostsData();
  const { id } = params;

  const post = posts.find(post => post.id === id);

  if (!post)
    return {
      title: "Post not found",
    };

  return {
    title: post.title,
  };
};

const PostPage = async ({ params }: { params: { id: string } }) => {
  const posts = getSortedPostsData();
  const { id } = params;

  if (!posts.find(post => post.id === id)) {
    return notFound;
  }

  const { title, author, description, contentHtml, date, image } =
    await getPostData(id);

  const pubDate = getFormattedDate(date);

  return (
    <article className="max-w-6xl container mx-auto p-4 my-10">
      <Link
        className="bg-textColor text-background py-2 px-8 rounded-md hover:bg-primary hover:text-background"
        href="/blog"
      >
        &larr; Back
      </Link>
      <div className="my-10 flex flex-col gap-2">
        <h1 className="text-2xl lg:text-4xl  text-primary font-bold uppercase">
          {title}
        </h1>
        <small className="text-dark text-xs">{pubDate}</small>
        <section
          className="tracking-wide mt-10"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></section>
      </div>
    </article>
  );
};

export default PostPage;
