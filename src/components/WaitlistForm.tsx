import { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralCode: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
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
        size="large"
        sx={{ mt: 2 }}
      >
        Join the Waitlist
      </Button>
    </Box>
  )
}
