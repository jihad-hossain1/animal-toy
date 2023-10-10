import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/home/Home";
import AllToy from "../pages/allToy/AllToy";
import WhiteList from "../pages/whiteList/WhiteList";
import Tranding from "../pages/tranding/Tranding";
import Contact from "../pages/contact/Contact";
import Blogs from "../pages/blogs/Blogs";
import { Login } from "../pages/log/Login";
import ToyDetails from "../pages/allToy/toyDetails/ToyDetails";

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
                path: '/singletoy/:id',
                element: <ToyDetails></ToyDetails>,
                loader: async({ params }) => await fetch(`${import.meta.env.VITE_BASE_URL}/toys/${params.id}`)
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
    },
    {
        path: '/login',
        element: <Login />
    }

])