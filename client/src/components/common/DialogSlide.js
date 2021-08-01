import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const DialogSlide = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 1000)
  }, [])

  const handleAgree = (e, choice) => {
    e.preventDefault()
    setOpen((prev) => !prev)
    localStorage.setItem('cookies', choice)
  }

  return (
    <div className='dialog-slide-container'>
      <Slide direction='up' in={open} mountOnEnter unmountOnExit>
        <div className='dialog-box'>
          <div>We use cookies to save the location the user is in before existing. </div>
          <Button onClick={(e) => handleAgree(e, true)}>Agree</Button>
          <Button onClick={(e) => handleAgree(e, false)}>Disagree</Button>
        </div>
      </Slide>
    </div>
  )
}

export default DialogSlide
