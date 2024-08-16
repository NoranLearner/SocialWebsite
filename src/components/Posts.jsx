import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Menu, MenuItem } from '@mui/material';
import {   useTheme } from "@mui/material/styles";

// --------------------- //

const Posts = () => {

    // --------------------- //

    const myCards = [
        {
            letter: "A",
            color: "#053ea8",
            userName: "Ali Hassan",
            imgLink:
                "https://images.pexels.com/photos/3480792/pexels-photo-3480792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            letter: "D",
            color: "#a020f0",
            userName: "Dohaa Hassan",
            imgLink:
                "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            letter: "N",
            color: "#008080",
            userName: "Noran Mohamed",
            imgLink:
                "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            letter: "W",
            color: "#053ea8",
            userName: "Walaa Hassan",
            imgLink:
                "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    // --------------------- //

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // --------------------- //

    const theme = useTheme()

    // --------------------- //

    return (

        // --------------------- //

        <Box component="main" sx={{ flexGrow: "3" }}>

            {/* --------------------- */}

            {myCards.map((item) => {
                return (
                    <Card sx={{ maxWidth: {xs: "97%", sm: 444}, mx: "auto", my: 5 }} key={item.userName}>

                        {/* --------------------- */}

                        <CardHeader
                            avatar={<Avatar sx={{ color: theme.palette.getContrastText(item.color), bgcolor: item.color }} aria-label="recipe"> {item.letter} </Avatar>}
                            action={<IconButton aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}> <MoreVertIcon /> </IconButton>}
                            title={item.userName}
                            subheader="September 14, 2016"
                        />

                        {/* --------------------- */}

                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>

                        {/* --------------------- */}

                        <CardMedia component="img" height="194" image={item.imgLink} />

                        {/* --------------------- */}

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>

                        {/* --------------------- */}

                        <CardActions disableSpacing>

                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} sx={{ '&.Mui-checked': { color: pink[400] } }} />

                            <IconButton aria-label="share"> <ShareIcon /> </IconButton>

                            <Box flexGrow={1} />

                            <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>

                        </CardActions>

                        {/* --------------------- */}

                    </Card>
                );
            })}

            {/* --------------------- */}



        </Box>

    )
}

export default Posts;