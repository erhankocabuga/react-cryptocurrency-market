import Home from "../pages/Home/Home";
import GeneralLayout from "../pages/_layouts/GeneralLayout";

// https://reactrouter.com/docs/en/v6/getting-started/concepts#defining-routes
export default [
    {
        path: "/",
        element: <GeneralLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
        ],
    },
];
