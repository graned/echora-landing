import { useState } from 'react'
import { Box, TextField, Button, Typography, Modal, Fade, Backdrop } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px'
}

export default function WaitlistForm() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralCode: ''
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    handleClose()
  }

  return (
    <>
      <Button
        variant="contained"
        size="large"
        sx={{ 
          mt: 2,
          background: 'linear-gradient(45deg, #1976d2 30%, #9c27b0 90%)',
          color: 'white',
          fontWeight: 'bold',
          '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease'
          }
        }}
        onClick={handleOpen}
      >
        Join the Waitlist
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h6" component="h2" gutterBottom>
              Join the Waitlist
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Referral Code (optional)"
                value={formData.referralCode}
                onChange={(e) => setFormData({...formData, referralCode: e.target.value})}
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
