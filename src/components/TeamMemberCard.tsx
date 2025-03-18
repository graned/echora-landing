import { Card, CardContent, Typography, Avatar, Box } from '@mui/material'

export default function TeamMemberCard({ name, role, description, color }) {
  return (
    <Card
      sx={{
        height: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: `0 8px 32px ${color}40`
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar 
            sx={{ 
              mr: 2,
              width: 56,
              height: 56,
              bgcolor: color,
              color: '#fff'
            }}
          >
            {name[0]}
          </Avatar>
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {role}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  )
}
