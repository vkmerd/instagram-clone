import { createBrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import Reels from "./pages/Reels";
import Notifications from "./pages/Notifications";
import Message from "./pages/Message"
import Profile from "./pages/Profile"
import Explore from "./pages/Explore"
import Create from "./pages/Create"
import App from './App.jsx'
import Home from "./pages/home/Home.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'/home',
                element:<Home />,
                index:true
            },
            {
                path:'/search',
                element:<Search />
            },
            {
                path:'/reels',
                element:<Reels />
            },
            {
                path:'/notifications',
                element:<Notifications />
            },
            {
                path:'/message',
                element:<Message />
            },
            {
                path:'/profile',
                element:<Profile />
            },
            {
                path:'/explore',
                element:<Explore />
            },
            {
                path:'/create',
                element:<Create />
            },
        ],
    },
])