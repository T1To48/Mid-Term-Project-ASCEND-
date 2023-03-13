import * as React from 'react';


import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import { useState,useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import GradeIcon from '@mui/icons-material/Grade';

import MainLogo from "../assets/images/MainLogo.png"
import MainLogoOnHover from "../assets/images/MainLogoOnHover.png"





export default function Navbar() {
  const{loggedUser,setLoggedUser,localApi,setMusicSearchResult,theLogo}=useGlobalContext()
  const [status, setStatus] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElLibrary, setAnchorElLibrary] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isLibraryMenuOpen = Boolean(anchorElLibrary);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLibraryMenuOpen = (event) => {
    setAnchorElLibrary(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localApi ("del", "loggedUser");
    secureLocalStorage.clear()
    setLoggedUser([])
    setMusicSearchResult([])
  };
  const handleMenuClose = () => {
    setTimeout(()=>setAnchorEl(null),500)
  };
  const handleLibraryMenuClose = () => {
    setTimeout(()=>setAnchorElLibrary(null),500)
    
  };


useEffect(() => {
  
  setTimeout(()=>{
    Object.keys(loggedUser).length>0?
  setStatus(true):setStatus(false)
  },1)
   
 
}, [loggedUser])


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
    
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ marginTop: '10vh' }}
    >
      <div style={{ marginTop: '1vh' }} onMouseLeave={handleMenuClose} >
            <MenuItem onClick={handleLibraryMenuClose}><NavLink to='/'>HOME</NavLink></MenuItem>

      <MenuItem  ><NavLink  to='/'><div onClick={handleLogout}>Logout</div></NavLink></MenuItem>
    </div></Menu>
    
  );
  const libraryId = 'primary-search-account-menu';
  const renderLibrary = (
    <Menu
      anchorEl={anchorElLibrary}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={libraryId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isLibraryMenuOpen}
      onClose={handleLibraryMenuClose}
      sx={{ marginTop: '10vh' }}
    ><div style={{ marginTop: '1vh' }} onMouseLeave={handleLibraryMenuClose} >
      <MenuItem onClick={handleLibraryMenuClose}>Quotes</MenuItem>
      <MenuItem onClick={handleLibraryMenuClose}><NavLink to='/music-library'>Music</NavLink></MenuItem>
      </div>
    </Menu>
  );

  const LogoWidth=window.innerWidth>700?{width:window.innerWidth*0.1}:{width:window.innerWidth*0.2};
  
  return (
    <Box  sx={{ flexGrow: 1,margin:"10%"}}>
      <AppBar position="fixed" sx={{borderRadius:"20px",width:"80vw",margin:"1% 10%"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            <div onMouseOver={()=>theLogo.current.src=MainLogoOnHover} onMouseLeave={()=>theLogo.current.src=MainLogo} onClick={() => setMusicSearchResult([])}>
            <NavLink to='/'><img src={MainLogo} style={LogoWidth}  alt="ASCEND" ref={theLogo} /></NavLink>
            </div>
          </Typography>
           
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            
            {status&&<IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={libraryId}
              aria-haspopup="true"
              onClick={handleLibraryMenuOpen}
              color="inherit"
            >
              <GradeIcon sx={{"&:hover":{color:"#1fb75c"}}}/>
            </IconButton>}
            {status?<IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{"&:hover":{color:"#1fb75c"}}}/>
            </IconButton>:<Button><NavLink to='/login'>Login</NavLink></Button>}
          </Box>
          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
            //   aria-controls={mobileMenuId}
              aria-haspopup="true"
            //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderLibrary}
      {status&& renderMenu}
      {renderMenu}
    </Box>
  );
}

