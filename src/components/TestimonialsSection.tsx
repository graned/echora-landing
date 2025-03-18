import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material'

const testimonials = [
  {
    name: 'Jane Doe',
    avatar: 'JD',
    quote: 'Echora has transformed how I create audiobooks. The voices are so realistic!'
  },
  {
    name: 'John Smith',
    avatar: 'JS',
    quote: 'The customization options are incredible. I can finally bring my characters to life!'
  }
]

export default function TestimonialsSection() {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        What Our Users Say
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ mr: 2 }}>{testimonial.avatar}</Avatar>
                  <Typography variant="h6">{testimonial.name}</Typography>
                </Box>
                <Typography variant="body1">
                  "{testimonial.quote}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
