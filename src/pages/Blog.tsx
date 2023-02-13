import PostCard from "../components/PostCard";
import { allPosts } from "../data";
import { IPost } from "../types/types";

export default function Blog() {
  return (
    <div className="blog-container">
      {allPosts.map((post: IPost) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
