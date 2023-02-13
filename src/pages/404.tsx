import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Page not found</h1>
      <button onClick={() => navigate(routes.main)}>Back to home page</button>
    </div>
  );
}
