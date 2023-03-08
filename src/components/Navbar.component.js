// import { useState } from 'react';
// import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

// import Wrapper from '../styles/styled/Navbar.styled';
// import Logo from './Logo.component';

// import { useGlobalContext } from '../context/GlobalContext';

// const Navbar = ({ user, setUser }) => {
//   const [showLogout, setShowLogout] = useState(false);

//   const handleLogout = () => {
//     setUser('');
//     localStorage.removeItem('userData');
//   };

//   return (
//     <Wrapper>
//       <div className='nav-center'>
//         <div>
//           <Logo />
//         </div>
//         <div className='btn-container'>
//           <button
//             type='button'
//             className='btn'
//             onClick={() => setShowLogout(!showLogout)}
//           >
//             <FaUserCircle />
//             {user?.name}
//             <FaCaretDown />
//           </button>
//           <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
//             <button
//               type='button'
//               className='dropdown-btn'
//               onClick={handleLogout}
//             >
//               logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };
// export default Navbar;


import { NavLink } from 'react-router-dom';

import { useGlobalContext } from '../context/GlobalContext';
import { useState,useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

import * as React from 'react';
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






export default function Navbar() {
  const{loggedUser,setLoggedUser,localApi,setMusicSearchResult}=useGlobalContext()
  const [status, setStatus] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElLibrary, setAnchorElLibrary] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isLibraryMenuOpen = Boolean(anchorElLibrary);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
  const handleLibraryMenuClose = () => {
    setAnchorElLibrary(null);
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
      onClose={handleLogout}
      style={{ marginTop: '8vh' }}
    >
      <MenuItem onClick={handleLogout}><NavLink to='/'>Logout</NavLink></MenuItem>
    </Menu>
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
      style={{ marginTop: '8vh' }}
    >
      <MenuItem onClick={handleLibraryMenuClose}>Quotes</MenuItem>
      <MenuItem onClick={handleLibraryMenuClose}><NavLink to='/music-library'>Music</NavLink></MenuItem>
    </Menu>
  );



  return (
    <Box sx={{ flexGrow: 1,marginBottom:2}}>
      <AppBar position="static" sx={{borderRadius:"20px" }}>
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
            LOGO
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
              <GradeIcon />
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
              <AccountCircle />
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

