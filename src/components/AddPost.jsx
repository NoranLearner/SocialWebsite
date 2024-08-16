import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, Button, ButtonGroup, Stack, TextField } from '@mui/material';
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: "97%", sm : 399},
    bgcolor: 'background.paper',
    borderRadius: "6px",
    boxShadow: 24,
    padding: "22px",
};

const AddPost = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Tooltip title="Add Post" sx={{ position: "fixed", bottom: "22px", left: "22px" }}>
                <Fab color="primary" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center", mb: 1 }}>
                        Create a post
                    </Typography>

                    <Stack alignItems="center" direction="row">
                        <Avatar sx={{ mr: "13px" }} src="https://i.pinimg.com/474x/1b/61/45/1b614533bde5ad1760664fd6c35dd895.jpg" />
                        <Typography variant="body1">Layla Hassan</Typography>
                    </Stack>

                    <TextField
                        sx={{ width: "100%", mt: "22px" }}
                        multiline
                        rows={2}
                        placeholder="What is in your mind ..."
                        variant="standard"
                    />

                    <Stack direction={"row"} spacing={1} my={3}>
                        <EmojiEmotionsIcon color="primary" />
                        <ImageIcon color="secondary" />
                        <VideoCameraBackIcon color="success" />
                        <PersonAddIcon color="error" />
                    </Stack>

                    <ButtonGroup sx={{ width: "100%" }} variant="contained">
                        <Button sx={{ flexGrow: 1 }}>Post</Button>
                        <Button> <DateRangeIcon /> </Button>
                    </ButtonGroup>

                </Box>
            </Modal>

        </>
    )
}

export default AddPost;