import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ConnectUs from "../../Pages/ConnectUs/ConnectUs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/SignUp";
import AllFresherJob from "../../Pages/Home/FresherJob/AllFresherJob";
import AllExpriencedJob from "../../Pages/Home/ExpriencedJob/AllExpriencedJob";
import AboutUs from "../../Pages/AboutUS/AboutUs";
import Extra from "../../Pages/Extra/Extra";
  const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children:[
                {
                    path:'/',
                    element: <Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element: <Signup></Signup>
                },
                {
                    path:'/contactus',
                    element: <ConnectUs></ConnectUs>
                },
                {
                    path:'/allfresherjob',
                    element: <AllFresherJob></AllFresherJob>
                },
                {
                    path:'/allexpriencedjob',
                    element: <AllExpriencedJob></AllExpriencedJob>
                },
                {
                    path:'/aboutus',
                    element: <AboutUs></AboutUs>
                },
                {
                    path:'/extra',
                    element: <Extra></Extra>
                },
            ]
        }
 ])

 export default router;