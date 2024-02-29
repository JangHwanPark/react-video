import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

/* React Router Dom 경로 배열 전달. */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <NotFound/>,
        children: [
            {index: true, element: <Home/>},
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router}/>
}