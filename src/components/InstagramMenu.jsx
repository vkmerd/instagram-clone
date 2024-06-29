import { Stack,Box,MenuItem, Typography} from "@mui/material"
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
       <Stack marginTop="40px" direction="column" gap="20px">
       {NavMenuItem.map((menu, index) => (
                <MenuItem
                key={index}
                component={Link}
                to={menu.internalPath}
                style={{padding:"10px 0 10px 10px"}}
                
            >
                {menu.icon}
                <h3 className={location.pathname === menu.internalPath ? "activeMenuTitle" : ""} style={{paddingLeft:"16px", fontWeight:"400", fontSize:"16px", fontFamily:"var(--first-font)"}}>{menu.title}</h3>
            </MenuItem>
        ))}
       </Stack>
    </Stack>       
    )
}