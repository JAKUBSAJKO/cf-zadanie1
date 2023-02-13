import { useParams } from "react-router-dom";

import PostDetail from "../components/PostDetail";
import { allPosts } from "../data";
import { IPost } from "../types/types";

export default function Post() {
  const { slug } = useParams();

  const clickedPost: IPost[] = allPosts.filter((post) => post.slug === slug);

  return (
    <div className="container">
      {clickedPost?.map((post: IPost) => (
        <PostDetail key={post.slug} post={post} />
      ))}
    </div>
  );
}
