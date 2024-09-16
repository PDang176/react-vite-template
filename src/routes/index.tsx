import { RouteObject } from "react-router-dom";

const Routes = [
  {
    index: true,
    element: <p>Hello World</p>,
  },
  {
    path: "path",
    element: <p>Goodbye World</p>,
  },
] as RouteObject[];

export default Routes;
