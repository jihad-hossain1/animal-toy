import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/home/Home";
import AllToy from "../pages/allToy/AllToy";
import WhiteList from "../pages/whiteList/WhiteList";
import Tranding from "../pages/tranding/Tranding";
import Contact from "../pages/contact/Contact";
import Blogs from "../pages/blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/alltoys',
                element: <AllToy></AllToy>
            }
           ,
            {
                path: '/whitelist',
                element: <WhiteList></WhiteList>
            }
           ,
            {
                path: '/tranding',
                element: <Tranding></Tranding>
            }
           ,
            {
                path: '/contact',
                element: <Contact></Contact>
            }
           ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])