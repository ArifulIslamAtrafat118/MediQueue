import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import DoctorProfileDetails from "../Pages/DoctorProfileDetails/DoctorProfileDetails";
import ErrorPage from "../Pages/Errors/ErrorPage";
import MyBookings from "../Pages/MyBookings/MyBookings";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: RootLayout,
            errorElement: <ErrorPage></ErrorPage>,
            children:[
                {
                    index: true,
                    loader: ()=>fetch('../doctorsData.json'),
                    Component: Home,
                },
                {
                    path: '/doctors-profile/:registration_number',
                    loader : ({params})=>fetch('../doctorsData.json'),
                    Component: DoctorProfileDetails,
                },
                {
                    path: '/blogs',
                    loader: ()=>fetch('../blogsData.json'),
                    Component: Blogs
                },
                {
                    path: '/bookings',
                    loader: ()=>fetch('../doctorsData.json'),
                    Component: MyBookings,
                }
            ]
        }
    ]
);