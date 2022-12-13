import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from "../pages/Main/Main"
  import Darksouls from "../pages/darksouls/darksouls"


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
  
    {
      path: "/darksouls",
      element: <Darksouls/>,
    },
  ]);
  export default router;