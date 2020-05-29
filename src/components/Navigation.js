import React from 'react';
import {AppBar, Toolbar, Button, TextField, InputAdornment} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {withStyles} from "@material-ui/core/styles";
import Logo from "../images/logo_square.png";
import {navigate} from 'gatsby';

const styles = {
    
    navBar: {
        width: "100%",
        height: 60,
        backgroundColor: "#ff4654"
    },

    btn: {
        width: "25%",
        color: "#101823"
    },

    homebtn: {
        height: 60, 
        minWidth: 60,     
    },

    textField: {
        color: "#101823",
        height: "40",
        width: "30%"
    },

    cssLabel: {
        color : '#101823',
        "&$selected": {
            color: "#101823"
        },
    },
    
    notchedOutline: {
        borderWidth: '1px',
        borderColor: '#101823 !important'
    },
};

class Navigation extends React.Component {

    homePage(index) {
        navigate('/'); //navigate to edit page
    }

    agentsPage(index) {
        navigate('/agents'); //navigate to edit page
    }
    
    render(props) {
        const { classes } = this.props;
        const page = this.props.page;

        if (page==="home") {
            return (
                <div className={classes.navBar}>
                    <AppBar position="static" className={classes.navBar}>
                        <Toolbar>
                            <Button className={classes.homebtn} onClick={() => this.homePage()}>
                                <img src={Logo} alt="Home" height="45"/>
                            </Button>

                            <div style={{width: "100%", paddingRight: "5%"}}>
                                <Button className={classes.btn} onClick={() => this.agentsPage()}>AGENTS</Button>
                                <Button className={classes.btn} >WEAPONS</Button>
                                <Button className={classes.btn} >MAPS</Button>
                                <Button className={classes.btn} >COACHING TOOL</Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            );
        }

        return (
            <div className={classes.navBar}>
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                        <Button className={classes.homebtn} onClick={() => this.homePage()}>
                            <img src={Logo} alt="Home" height="45"/>
                        </Button>
                        <div style={{width: "100%", paddingRight: "5%"}}>
                            <Button className={classes.btn} onClick={() => this.agentsPage()}>AGENTS</Button>
                            <Button className={classes.btn} >WEAPONS</Button>
                            <Button className={classes.btn} >MAPS</Button>
                            <Button className={classes.btn} >COACHING TOOL</Button>
                        </div>

                        <TextField
                            className={classes.textField}
                            variant="standard"
                            id="search-input"
                            // value={}
                            // onChange={}
                            InputProps={{
                                min: 0, 
                                style: {color: "#101823"},
                                endAdornment: (
                                    <InputAdornment position='end'>
                                    <Search/>
                                    </InputAdornment>
                                ),
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}

                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                },
                            }}>

                        </TextField>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);

