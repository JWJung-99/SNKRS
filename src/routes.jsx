import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "@components/Layout";
import Feed from "@pages/Feed";
import InStock from "@pages/InStock";
import Upcoming from "@pages/Upcoming";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/feed" /> },
      { path: 'feed', element: <Feed /> },
      { path: 'instock', element: <InStock /> },
      { path: 'upcoming', element: <Upcoming /> }
    ]
  }
]);

export default router;