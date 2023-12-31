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
import AdminDashboard from "../layouts/admin/AdminDashboard";
import AdminDashboardHome from "../pages/dashboard/admin/adminDashboardHome/AdminDashboardHome";
import SellerDashboardHome from "../pages/dashboard/seller/SellerDashboardHome";
import UserDashboard from "../layouts/user/UserDashboard";
import UserDashboardHome from "../pages/dashboard/user/userProfile/UserDashboardHome";
import SellerDashboard from "../layouts/seller/sellerDashboard";
import AddToy from "../pages/dashboard/seller/addToy/AddToy";
import ManageToy from "../pages/dashboard/seller/manageToy/ManageToy";
import Carts from "../pages/dashboard/user/userProfile/Carts";
import UpdateToy from "../pages/dashboard/seller/updateToy/UpdateToy";
import Checkout from "../pages/dashboard/user/checkout/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <AllToy></AllToy>,
      },
      {
        path: "/singletoy/:id",
        element: <ToyDetails></ToyDetails>,
        loader: async ({ params }) =>
          await fetch(`${import.meta.env.VITE_BASE_URL}/toys/${params.id}`),
      },
      {
        path: "/whitelist",
        element: <WhiteList></WhiteList>,
      },
      {
        path: "/tranding",
        element: <Tranding></Tranding>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/userDashboard",
        element: <UserDashboardHome />,
      },
      {
        path: "/abc",
        element: <div>abc</div>,
      },
    ],
  },
  {
    path: "/dashboardAdminOnly",
    element: <AdminDashboard />,
    children: [
      {
        path: "/dashboardAdminOnly",
        element: <AdminDashboardHome />,
      },
    ],
  },
  {
    path: "/dashboardSellerOnly",
    element: <SellerDashboard />,
    children: [
      {
        path: "/dashboardSellerOnly",
        element: <SellerDashboardHome />,
      },
      {
        path: "/dashboardSellerOnly/addToy",
        element: <AddToy />,
      },
      {
        path: "/dashboardSellerOnly/manageToy",
        element: <ManageToy />,
      },
      {
        path: "/dashboardSellerOnly/carts",
        element: <Carts />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
