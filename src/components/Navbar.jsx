import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from '../styles'

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <CssBaseline />
        <AppBar position="sticky" style = {{background:'red'}}>
            <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
                Album layout
            </Typography>
            </Toolbar>
       </AppBar>
        </>
    )
}

export default Navbar
