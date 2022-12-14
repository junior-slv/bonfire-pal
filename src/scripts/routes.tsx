import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from "../pages/Main/Main"
  import Darksouls from "../pages/darksouls/darksouls"
  import Apresentation from "../pages/apresentation/apresentation";


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Apresentation/>,
    },
  
    {
      path: "/gameselect",
      element: <Main/>,
    },

    {
      path: "/darksouls",
      element: <Darksouls/>,
    },
  ]);
  export default router;