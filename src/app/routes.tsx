import { createBrowserRouter } from "react-router";
import { AppWrapper } from "./components/AppWrapper";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppWrapper,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "work",
        Component: Work,
      },
      {
        path: "work/:projectId",
        Component: Work,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);