import React from 'react';
import { withStyles} from "@material-ui/core/styles";
import {Typography, IconButton, Link} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(faTwitter);

const styles = ({
    footer: { 
        bottom: "0",
        width: "100%",
        backgroundColor: "#ff4654",
    },

    typ1: {
        position: 'relative',
        color: "#101823",
        marginTop: 10, 
        marginLeft: 10, 
        marginBottom: 10,
        fontSize: 10, 
        width: "35%", 
        textAlign: "justify",
        display: "inline-block",
    },

    links: {
        float: "right",
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },

    icon: {
        float: "right",
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        display: "inline-block",
    },
});

class Footer extends React.Component {
    
    render(props) {

        const { classes } = this.props;

        var pos = "relative";

        if (this.props.page === "home") {
            pos = "absolute";
        }

        return (
            <div className={classes.footer} style={{position: pos}} display="inline-block" >

                <Typography className={classes.typ1}>
                    TTK.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games 
                    or anyone officially involved in producing or managing VALORANT. VALORANT and Riot Games are 
                    trademarks or registered trademarks of Riot Games, Inc. VALORANT © Riot Games, Inc.
                </Typography>

                <div className={classes.typ1}>
                    <Link className={classes.links} href="#" color="inherit">
                        Contact
                    </Link>
                    <div className={classes.links}>•</div>
                    <Link className={classes.links} href="#" color="inherit">
                        About
                    </Link>
                    <div className={classes.links}>•</div>
                    <Link className={classes.links} href="#" color="inherit">
                        Privacy Policy
                    </Link>
                </div>

                <Typography className={classes.icon}>
                    <IconButton aria-label="discord" component="span" 
                        onClick={() => window.open("http://discord.gg//zCRyHvh", "_blank")}>
                        <FontAwesomeIcon icon={faDiscord} />
                    </IconButton>
                </Typography>
                <Typography className={classes.icon}>
                    <IconButton aria-label="discord" component="span"
                        onClick={() => window.open("http://twitter.com/ttk_gg", "_blank")}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </IconButton>
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);
