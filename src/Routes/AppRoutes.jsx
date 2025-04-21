import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import DoctorProfileDetails from "../Pages/DoctorProfileDetails/DoctorProfileDetails";
import ErrorPage from "../Pages/Errors/ErrorPage";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: RootLayout,
            errorElement: <ErrorPage></ErrorPage>,
            children:[
                {
                    index: true,
                    loader: ()=>fetch('/doctorsData.json'),
                    Component: Home,
                },
                {
                    path: '/doctor-profile',
                    Component: DoctorProfileDetails,
                },
                {
                    path: '/blogs',
                    Component: Blogs
                }
            ]
        }
    ]
);