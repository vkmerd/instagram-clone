import { Avatar } from "@mui/material";
import { CreateIcon, HomeIcon, MessageIcon, NotificationsIcon, ProfileIcon, ReelsIcon, SearchIcon } from "../icon/Icon";


export const NavMenuItem = [
    {
        internalPath: '/home',
        icon:<HomeIcon />,
        title:"Home"
    },
    {
        internalPath: '/search',
        icon:<SearchIcon />,
        title:"Search"
    },
    {
        internalPath: '/reels',
        icon:<ReelsIcon />,
        title:"Reels"
    },
    {
        internalPath: '/profile',
        icon:<ProfileIcon />,
        title:"Profile"
    },
    {
        internalPath: '/notifications',
        icon:<NotificationsIcon />,
        title:"Notifications"
    },
    {
        internalPath: '/create',
        icon:<CreateIcon />,
        title:"Create"
    },
    {
        internalPath: '/message',
        icon:<MessageIcon />,
        title:"Message"
    },
]