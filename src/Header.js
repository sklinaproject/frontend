import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
//import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import Proposal from "./pages/Proposal";
import Intro from "./pages/Intro";
import CustomerList from "./pages/CustomerList";
import ProductList from "./pages/ProductList";
import AlarmList from "./pages/AlarmList";
import MypageList from "./pages/MypageList";

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});



//function Header(props) {
class  Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        toggle: false,
        value: ''
        };
        }

        static propTypes = {
            children: PropTypes.object.isRequired,
          };

        handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
        onDrawerToggle = () => this.setState({toggle: !this.state.toggle})


        handleValueChange = (e, newValue) => {

            this.setState({
                value: newValue
            })
        }
        
        
    render() {

  const { classes} = this.props;

  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
        <AppBar color="primary" position="sticky" elevation={0}>
            <Toolbar>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="logo.png" alt="React" />
              </IconButton>
            </Grid>
              <Typography color="inherit" variant="h5">
                <Link className={classes.link} to="/" >
                EZINS
                </Link>
              </Typography>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  /* onClick={onDrawerToggle} */
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Link className={classes.link} href="#" variant="body2" onClick={() => window.open('https://github.com/sklinaproject/project', '_blank')}>
                Go to download
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

     
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={this.state.value} textColor="inherit" indicatorColor="primary"  onChange={this.handleValueChange}>
          <Tab textColor="inherit" label="Product" component={Link} to="/ProductList" />
          <Tab textColor="inherit" label="Customer" component={Link} to="/CustomerList" />
          <Tab textColor="inherit" label="Join" component={Link} to="/Joins"  />
          <Tab textColor="inherit" label="Mypage" component={Link} to="/MypageList" />
          <Tab textColor="inherit" label="Alarm" component={Link} to="/AlarmList"  />
        </Tabs>
      </AppBar>
      <Route exact path="/" component={Intro} />
      <Switch>
            <Route path="/ProductList" component={ProductList} />
            <Route path="/CustomerList" component={CustomerList} />
            <Route path="/Joins" component={Proposal} />
            <Route path="/MypageList" component={MypageList} />
            <Route path="/AlarmList" component={AlarmList} />
      </Switch>
      </BrowserRouter>
      </div>

      <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
      </div>

    </React.Fragment>
  );
}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
