import { getSortedPostsData } from "@/lib/posts";
import PostItem from "./PostItem";

const Posts = () => {
  const posts = getSortedPostsData();

  return (
    <section>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <PostItem {...post} key={post.id} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
