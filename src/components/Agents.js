import React from 'react';
import {withStyles, makeStyles} from "@material-ui/core/styles";
import {IconButton, Typography, Box} from '@material-ui/core';

const styles = {
    
    title: {
        variant: "h4",
        color: "#ff4654",
        marginTop: 50
    },

    agentsIcons: {
        width: "40%",
    },

    icon: {
        width: 120,
        height: 120,
        display: "inline-block",
        borderColor: "white",
        border: "1px solid",
        margin: 10
    },

    tableDiv: {
        margin: "5%",
        minHeight: "90%",
        border: "1px solid #ddd",
    },

    tableRow: {
        fontFamily: 'Roboto',
        textAlign: "center",
        borderColor: "white",
        fontSize: 14,
        border: "1px solid #ddd",
    },

    tableHead: {
        fontFamily: 'Roboto',
        textAlign: "center",
        borderColor: "white",
        backgroundColor: "#ff4654",
        color: "#101823",
        fontSize: 16,
        align: "center",
    },

    tableCell: {
        fontFamily: 'Roboto',
        textAlign: "center",
        alignItems: 'center',
        borderColor: "white",
        border: "1px solid #ddd",
    },
};



class Agents extends React.Component {

    constructor(props) {
        super(props);
        this.images = [];
        this.tableRows = [];
    }
    
    createData(agent, pickRate, ability1, ability2, ability3) {
        return {agent, pickRate, ability1, ability2, ability3};
    }

    componentWillMount() {
        this.images = this.importAll(require.context('../images/agents/', false, /\.(png|jpe?g|svg)$/));
        this.tableRows = [
            {agent: 'Phoenix', pickRate: '60%', ability1: 10, ability2: 2, ability3: 4 },
            {agent: 'Cypher', pickRate: '50%', ability1: 10, ability2: 2, ability3: 4 },
            {agent: 'Jett', pickRate: '50%', ability1: 10, ability2: 2, ability3: 4 },
            {agent: 'Viper', pickRate: '30%', ability1: 10, ability2: 2, ability3: 4 },
            {agent: 'Raze', pickRate: '70%', ability1: 10, ability2: 2, ability3: 4 },
            // {agent: 'Brimstone', pickRate: '60%', ability1: 10, ability2: 2, ability3: 4 },
            // {agent: 'Breach', pickRate: '50%', ability1: 10, ability2: 2, ability3: 4 },
            // {agent: 'Omen', pickRate: '50%', ability1: 10, ability2: 2, ability3: 4 },
            // {agent: 'Sage', pickRate: '30%', ability1: 10, ability2: 2, ability3: 4 },
            // {agent: 'Sova', pickRate: '70%', ability1: 10, ability2: 2, ability3: 4 },
        ];
    }

    importAll(r) {
        return r.keys().map(r);
    }

    getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }

    renderTableHeader() {
        const { classes } = this.props;
        let header = ['id'].concat(Object.keys(this.tableRows[0]))
        return header.map((key, index) => {
           return <th className={classes.tableHead} key={index}>{key.toUpperCase()}</th>
        })
     }
  
    renderTableData() {
        const { classes } = this.props;
        return this.tableRows.map((row, index) => {
            const {agent, pickRate, ability1, ability2, ability3} = row //destructuring
            return (
                <tr key={index} className={classes.tableRow}>
                    <td className={classes.tableCell}>{index+1}</td>
                    <td className={classes.tableCell}>{agent}</td>
                    <td className={classes.tableCell}>{pickRate}</td>
                    <td className={classes.tableCell}>{ability1}</td>
                    <td className={classes.tableCell}>{ability2}</td>
                    <td className={classes.tableCell}>{ability3}</td>
                </tr>
            )
        })
    }

    render(props) {
        const { classes } = this.props;

        return (
            <div>
                <Typography variant="h4" width="100%" align="center"className={classes.title}>
                    VALORANT AGENTS
                </Typography>

                <Box display="flex" justifyContent="center" m={10} p={1}>
                    <div className={classes.agentsIcons}>
                        {this.images.map(
                            (image, index) =>   
                                <Typography className={classes.icon} key={index} >
                                    <IconButton style={{display: "block"}} aria-label="discord" component="span" 
                                        // onClick={() => window.open("http://discord.gg//zCRyHvh", "_blank")}
                                        >
                                        <img 
                                            title={this.images[index].slice(this.getPosition(this.images[index], "/", "2")+1, this.images[index].indexOf("_"))} 
                                            src={image} alt="info">
                                        </img>
                                        
                                    </IconButton>
                                
                                </Typography>
                        )}
                    </div>
                    
                    <div>
                        <table className={classes.tableDiv}>
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </Box>
            </div>
        );
    }
}

export default withStyles(styles)(Agents);

