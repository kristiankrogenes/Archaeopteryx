
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menuTitle: {
        marginRight: theme.spacing(80),
    },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Button component={Link} to="/" color="inherit" className={classes.menuTitle}>
            <Typography variant="h6" className={classes.title}>
                ARCHAEOPTERYX
            </Typography>
          </Button>

          <Button component={Link} to="/users" color="inherit">Users</Button>
          <Button component={Link} to="/scores" color="inherit">Scores</Button>
          <Button component={Link} to="/courses" color="inherit">Courses</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;


// import { NavLink } from 'react-router-dom';

// function NavBar() { 
//     <Nav>
//         <NavLink to="/">
//             <h2>LOGO</h2>
//         </NavLink>
//         <NavMenu>
//             <NavLink to="/log">
//                 USERS
//             </NavLink>
//             <NavLink to="/workouts">
//                 SCORES
//             </NavLink>
//         </NavMenu>
//     </Nav>
// }

// export default NavBar;

// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink
//   } from './NavbarElements';
 
// const Navbar = () => {
//     return (
//         <>
//             <Nav>
//                 <NavLink to="/">
//                     <h2>Logo</h2>
//                 </NavLink>
//                 <Bars />
//                 <NavMenu>
//                     <NavLink to="/log" activeStyle>
//                         Log
//                     </NavLink>
//                     <NavLink to="/workouts" activeStyle>
//                         Workouts
//                     </NavLink>
//                     <NavLink to="/exercises" activeStyle>
//                         Exercises
//                     </NavLink>
//                     <NavLink to="/stats" activeStyle>
//                         Stats
//                     </NavLink>
//                 </NavMenu>
//                 {/* <NavBtn>
//                     <NavBtnLink to='/signin'>Sign in</NavBtnLink>
//                 </NavBtn> */}
//             </Nav>
//         </>
//     )
// }
 
// export default Navbar;