import { useNavigate } from "react-router-dom";

import { routes } from "../routes/routes";
import { IPost } from "../types/types";

interface Props {
  post: IPost;
}

export default function PostDetail({
  post: { title, entry, content, author, date },
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="post-detail">
      <h1>{title}</h1>
      <p>{entry}</p>
      <p>{content}</p>
      <p>{author}</p>
      <p>{date}</p>
      <button onClick={() => navigate(routes.blog)}>Back to blog page</button>
    </div>
  );
}
