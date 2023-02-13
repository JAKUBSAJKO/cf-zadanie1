import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { routes } from "./routes/routes";

const Main = lazy(() => import("./pages/Main"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Blog = lazy(() => import("./pages/Blog"));
const Post = lazy(() => import("./pages/Post"));
const PageNotFound = lazy(() => import("./pages/404"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div>
          <Navbar />
          <Routes>
            <Route index element={<Main />} />
            <Route path={routes.aboutMe} element={<AboutMe />} />
            <Route path={routes.blog} element={<Blog />} />
            <Route path={routes.post} element={<Post />} />
            <Route path={routes.pageNotFound} element={<PageNotFound />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
