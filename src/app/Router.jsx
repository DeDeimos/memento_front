import { createBrowserRouter } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoure";
import { Feed } from "../pages/feed/ui";
import { Profile } from "../pages/profile/ui";
import { Layout } from "../pages/layout/ui";
import { Explore } from "../pages/explore/ui";
import { Auth } from "../pages/auth/ui";
import { Reg } from "../pages/reg/ui";
import { PostPage } from "../pages/momentpage/ui";

const user_id = localStorage.getItem("user_id");

export const router = createBrowserRouter([
    {
        element: <Layout />,
        path: "/",
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: "/",
                        element: <Feed />,
                    },
                    {
                        path: "/profile",
                        element: <Profile id={user_id} />,
                    },
                    {
                        path: "/explore",
                        element: <Explore />,
                    },
                    {
                        path: "/feed",
                        element: <Feed />,
                    },
                    {
                        path: "/profile/:id",
                        element: <Profile />,
                    },
                    {
                        path: "/moment/:id",
                        element: <PostPage />,
                    }
                ],
            },
        ],
    },
    {
        element: <PublicRoute />,
        children: [
        {
            path: "/",
            element: <Auth />,
        },
        {
            path: "/auth",
            element: <Auth />,
        },
        {
            path: "/registration",
            element: <Reg />,
        },
        ],
    },
    ]);