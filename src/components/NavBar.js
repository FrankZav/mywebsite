import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon} from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail} from "@material-ui/icons";
import profile from "../images/me.jpg";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
    sideMenuContainer: {
        background: "#511",
        width: 250,
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem :{
        color: "tan",
    }
}));

const MenuItems = [
    {
        listIcon: <Home/>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "About Me"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact Me"
    }
]

const NavBar = () => {
    const [state, setState] = useState({
        visible: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open })
    });
    const classes = useStyles();
    const sideList = slider => (
        <Box 
            className={classes.sideMenuContainer} 
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={profile} alt="Frankie" />
            <List>
                {MenuItems.map((lsItem, key)=>(
                    <ListItem>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{ background: "#222"}}>
                <Toolbar>
                    {/* <IconButton onClick={toggleSlider("visible", true)}>
                        <ArrowBack style={{ color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{ color: "tan"}}> Portfolio </Typography>
                    <MobilRightMenuSlider 
                        anchor="left"
                        open={state.visible} 
                        onClose={toggleSlider("visible", false)}
                    >
                        {sideList("visible")}
                    </MobilRightMenuSlider> */}
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default NavBar
