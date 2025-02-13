import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

// --------------------- // 

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

// --------------------- //

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

// --------------------- //

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

// --------------------- //

const Appbar = ({showList, setShowList}) => {

    // --------------------- //

    // In Large Screen

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    // --------------------- //

    // In Small Screen

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton size="large" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
                    <Avatar alt="Noran" src="./images/avatar.jpeg" />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    // --------------------- //

    return (

        // --------------------- //

        <AppBar position="sticky">

            {/* --------------------- */}

            <Toolbar>

                {/* --------------------- */}

                <IconButton onClick={() => {showList === "none" ? setShowList("block") : setShowList("none");}} size="large" edge="start" color="inherit" sx={{ mr: 2, display:{xs: "flex", md: "none"} }}>
                    <MenuIcon />
                </IconButton>

                {/* --------------------- */}

                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }} >
                    c4a.dev
                </Typography>

                {/* --------------------- */}

                <Search>
                    <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </Search>

                {/* --------------------- */}

                <Box sx={{ flexGrow: 1 }} />

                {/* --------------------- */}

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center" }}>

                    <IconButton size="large" color="inherit" sx={{ width: "37px", height: "37px" }}>
                        <Badge badgeContent={4} color="error"> <MailIcon /> </Badge>
                    </IconButton>

                    <IconButton size="large" color="inherit" sx={{ width: "37px", height: "37px" }}>
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <IconButton size="large" edge="end" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
                        <Avatar alt="Noran" src="./images/avatar.jpeg" />
                    </IconButton>

                </Box>

                {/* --------------------- */}

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                    <IconButton size="large" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit" >
                        <MoreIcon />
                    </IconButton>

                </Box>

                {/* --------------------- */}

            </Toolbar>

            {/* --------------------- */}

            {renderMobileMenu}

            {renderMenu}

            {/* --------------------- */}

        </AppBar>

        // --------------------- //

    )

}

export default Appbar;