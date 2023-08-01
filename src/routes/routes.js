import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import AddPost from "../components/Admin/AddPost";
import Details from "../Pages/Details";
import AllPosts from "../components/Admin/AllPosts";
import History from "../Pages/History";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <p className="w-full text-center">404</p>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'admin-panel',
                element: <Admin />,
                children: [
                    {
                        index: true,
                        element: <AllPosts />
                    },
                    {
                        path: 'add-post',
                        element: <AddPost />
                    },
                ]
            },
            {
                path: `/details/:id`,
                element: <Details />
            },
            {
                path: `/reading-history`,
                element: <History />
            }
        ]
    }
])