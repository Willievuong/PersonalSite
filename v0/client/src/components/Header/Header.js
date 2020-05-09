import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import '../../App.css';
import '../CSS/Header.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

/* Header and Navigation Bar */
class HeaderPage extends Component{
  state = {
    anchorEl: null,
    open: false,
  };

  /* Need Correction, there is no side here */
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render(){
    const { classes } = this.props;
    const{  anchorEl }= this.state;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['home', 'about', 'project'].map((text, index) => (
            <ListItem button key={text}>
              <Link to={"/" + text} className="menuButton">
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );

    return(
      <div>
        <AppBar className="App-header" color="primary" position="static">
          <Toolbar>
          <Button className={classes.menuButton} onClick={this.toggleDrawer('left', true)}  style={{color: 'white'}}>
              <MenuIcon 
                aria-owns={anchorEl ? 'menu' : null}
                aria-haspopup="true"
                /></Button>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </Drawer>
          <Typography style={{color: 'white'}} variant="title" className={classes.grow}>
              William Vuong
          </Typography>
          <Avatar alt="Me" src="data:image/jpeg;base64,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" className={classes.bigAvatar} />
           </Toolbar>
        </AppBar>
      </div>
    );
  }
//)
}

HeaderPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderPage);