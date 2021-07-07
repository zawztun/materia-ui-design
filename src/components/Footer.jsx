import React from 'react'
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles'



const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
                </Typography>
                {/* <Copyright /> */}
            </footer>
      {/* End footer */}
        </div>
    )
}

export default Footer
