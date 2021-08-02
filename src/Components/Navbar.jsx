import {AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
    header: {
        background: '#000000'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: "none",
        margin: 20,
    }
})

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position={"static"}>

            <Toolbar>
                <NavLink className={classes.tabs} to={"./"} exact>
                    Arjun Codes
                </NavLink>
                <NavLink className={classes.tabs} to={"all"} exact>
                    All Users
                </NavLink>
                <NavLink className={classes.tabs} to={"add"} exact>
                    Add Users
                </NavLink>

            </Toolbar>

        </AppBar>
    )
}
export default Navbar;