import {createBrowserRouter} from "react-router-dom";
import {Layout} from "@pages/Layout/Layout.tsx";
import {Weather} from "@pages/Weather/Weather.tsx";
import {NotFoundPage} from "@pages/NotFoundPage/NotFoundPage.tsx";



export const routes = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
		children: [{
            index:true,
            element: <Weather/>
        }]
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }

]);
