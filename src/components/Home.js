import React from "react"
// import { Link } from "gatsby"

import {TextField, Typography, InputAdornment, Button} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";
import HomeBackground from "../images/home_background.jpg";
import Logo from "../images/logo_square.png";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const styles = theme => ({

  big_div: {
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)', 
    width: "100%",
    backgroundImage: `url(${HomeBackground})`,
    backgroundSize: "contain",
    height: "70%"
  },

  small_div: {
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%"
  },

  textField: {
    color: "white"
  },

  cssLabel: {
    color : 'white',
    "&$selected": {
      color: "white"
    },
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'
  },

  btn: {
    color: "#101823",
    borderColor: "white",
    width: "200px",
    height: "100px",
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: "#ff4654",
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#101823",
        color: "white"
    }
  },

  img: {
    userDrag: "none",
    userSelect: "none",
    MozUserSelect:"none",
    WebkitUserDrag: "none",
    WebkitUserSelect:"none",
    msUserSelect:"none",
  },

});

class Home extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <center>
        <div className={classes.big_div}>
            <div className={classes.small_div}>
              <img src={Logo} alt="Home" width="10%" className={classes.img}/>
              <br></br>

              <Typography component={'span'}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  id="search-input"
                  // value={}
                  // onChange={}
                  style = {{width: "70%"}}
                  InputProps={{
                    min: 0, 
                    style: { textAlign: 'center', color: "white"},
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
              </Typography>
              <br></br>

              <br></br>
              <br></br>

        
              <Typography style={{display: 'inline-block'}}>
                <Button className={classes.btn} variant="contained" >
                  Tips
                </Button>
                <Button className={classes.btn} variant="contained" >
                  Patch Notes
                </Button>
              </Typography>
            </div>
          
        </div>
      </center>
    );
  }
  
}

export default withStyles(styles)(Home);