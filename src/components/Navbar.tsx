import { Link } from "react-router-dom";

import { routes } from "../routes/routes";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.main}>Home</Link>
        </li>
        <li>
          <Link to={routes.aboutMe}>About Me</Link>
        </li>
        <li>
          <Link to={routes.blog}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
