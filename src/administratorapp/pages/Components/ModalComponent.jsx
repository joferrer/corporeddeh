/* eslint-disable react/prop-types */
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const style = {
    position: 'absolute',
    minWidth: "60vw",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    justifyContent: "space-between",
    overflow: "scroll",
    maxHeight: "80vh",
};

export default function TransitionsModal({ children, title, state, setState }) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setState(false);

    useEffect(() => {
        setOpen(state)
    }, [state])

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
                sx={{
                    overflow: "scroll",
                }}
            >
                <Fade in={open} style={{ overflow: "scroll" }}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {title}
                        </Typography>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}