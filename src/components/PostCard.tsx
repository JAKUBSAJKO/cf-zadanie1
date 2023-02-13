import { Link } from "react-router-dom";

import { routes } from "../routes/routes";
import { IPost } from "../types/types";

interface Props {
  post: IPost;
}

export default function PostCard({
  post: { slug, title, entry, author },
}: Props) {
  return (
    <div className="post-card">
      <Link to={`${routes.blog}/${slug}`}>
        <h1>{title}</h1>
        <p>{entry}</p>
        <p>{author}</p>
      </Link>
    </div>
  );
}
