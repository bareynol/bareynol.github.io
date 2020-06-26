import React, { useState, useEffect } from 'react';
import { Snackbar, Slide, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function Toast({message, delay}) {
  const [open, setOpen] = useState(false);
  let toastTimer = null;
  
  useEffect(() => {
    toastTimer = setTimeout(() => setOpen(true), delay);

    return () => clearTimeout(toastTimer)
  }, [])

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      TransitionComponent={(props) => <Slide {...props} direction="up" />}
      message={message}
      onClose={() => setOpen(false)}
      action={
        <IconButton size="small" color="inherit" onClick={() => setOpen(false)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  )
} 