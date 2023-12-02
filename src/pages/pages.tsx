import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import { routerType } from "../types/router.types";

const pagesData: routerType[] = [
  {
    path: "home",
    element: <Home />,
    title: "home",
  },
  {
    path: "",
    element: <Login />,
    title: "login",
  },
  {
    path: "signup",
    element: <Signup />,
    title: "signup",
  },
];

export const Pages = () => {
  const pageRoutes = pagesData.map(({ path, element, title }: routerType) => {
    return <Route path={path} element={element} key={title} />;
  });
  return (
    <Router>
      <div>
        <section>
          <Routes> {pageRoutes} </Routes>
        </section>
      </div>
    </Router>
  );
};
