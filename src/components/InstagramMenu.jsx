import { Stack,Box,MenuItem, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"

import { NavMenuItem } from "./menu/NavMenu"
import { InstagramIcon } from "./icon/Icon"

export const InstagramMenu = () => {

    console.log(NavMenuItem);

    const location = useLocation()
    
    return(
    <Stack 
        direction="column"
        padding="8px 12px 20px 0px"
        height="100%"
        borderRight="1px solid #dbdbdb"
        >
        <Stack marginTop="40px">
            <InstagramIcon />
        </Stack>
       <Stack marginTop="40px" direction="column">
       {NavMenuItem.map((menu, index) => (
            <MenuItem
                key={index}
                component={Link}
                to={menu.internalPath}
                selected={location.pathname === menu.internalPath}
            >
                {menu.icon}
                {menu.title}
            </MenuItem>
        ))}
       </Stack>
    </Stack>       
    )
}