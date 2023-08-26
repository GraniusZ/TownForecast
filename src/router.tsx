import {createBrowserRouter} from "react-router-dom";
import {Layout} from "@pages/Layout/Layout.tsx";
import {Weather} from "@pages/Weather/Weather.tsx";



export const routes = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
		children: [{
            index:true,
            element: <Weather/>
        }]
    },

]);
