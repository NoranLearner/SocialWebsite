import React from 'react';
import { Box, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const itemData = [
    {
        img: "https://images.pexels.com/photos/2995336/pexels-photo-2995336.jpeg",
        title: "Breakfast",
    },
    {
        img: "https://images.pexels.com/photos/3933239/pexels-photo-3933239.jpeg",
        title: "Burger",
    },
    {
        img: "https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg",
        title: "Camera",
    },
];

const RightBar = ({ theme }) => {

    return (
        <Box sx={{ flexGrow: "auto", bgcolor: theme.palette.favColor.main, pl: 2, display: { xs: "none", lg: "block" }, minWidth: "512px" }} component="section">

            {/* -------------------- */}

            <Box sx={{ position:"fixed" }}>

                {/* -------------------- */}

                <Typography sx={{ fontWeight: 300 }} mt={2} variant="h6"> Online Friends </Typography>

                {/* -------------------- */}

                <AvatarGroup total={24} sx={{ justifyContent: "center", my: 2 }}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 49, height: 45 }} />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" sx={{ width: 49, height: 45 }} />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" sx={{ width: 49, height: 45 }} />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" sx={{ width: 49, height: 45 }} />
                </AvatarGroup>

                {/* -------------------- */}

                <Typography sx={{ fontWeight: 300 }} my={2} variant="h6"> Latest Photo </Typography>

                {/* -------------------- */}

                <ImageList gap={10} sx={{ width: 500, height: 160, overflowY: "hidden" }} cols={3} rowHeight={99}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{ borderRadius: "5px" }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                {/* -------------------- */}

                <Typography sx={{ fontWeight: 300 }} mb={1} mt={4} variant="h6"> Latest Conversation </Typography>

                {/* -------------------- */}

                <List sx={{ width: '100%', maxWidth: 488, bgcolor: 'background.paper', m: "auto" }}>

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar> <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/7365020/pexels-photo-7365020.jpeg" /> </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">

                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/8669022/pexels-photo-8669022.jpeg" />
                        </ListItemAvatar>

                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />

                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">

                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>

                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary" >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />

                    </ListItem>

                </List>

                {/* -------------------- */}

            </Box>

            {/* -------------------- */}

        </Box>
    )
}

export default RightBar;