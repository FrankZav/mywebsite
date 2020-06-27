import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import { Typography, Grid, Box, Avatar } from "@material-ui/core";
import avatar from "../images/me.jpg"
import Typed from "react-typed";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontFamily: 'MuseoModerno',
        fontSize: '5rem',
    },
    subtitle: {
        color: "white",
        marginBottom: "3rem",
        fontFamily: 'MuseoModerno',
        fontSize: '2rem',
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Francisco Zavalza"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Development"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Amateur"]} typeSpeed={10}  showCursor={false}/>
                &nbsp;
                <Typed 
                    strings={["Sports Pundit", "Comedian", "Trader"]} 
                    typeSpeed={40}
                    backSpeed={60}
                    backDelay={2000}
                    loop
                />
            </Typography>
        </Box>
    )
}

export default Header
