import { Card, CardContent, Typography, Avatar, Box } from '@mui/material'
import { motion } from 'framer-motion'

export default function TeamMemberCard({ name, role, description, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card
        sx={{
          height: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: `0 8px 32px ${color}40`,
            transform: 'translateY(-10px)'
          }
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar 
              sx={{ 
                mr: 2,
                width: 64,
                height: 64,
                bgcolor: color,
                color: '#fff',
                fontSize: '1.5rem'
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
          <Typography variant="body1" sx={{ fontSize: '1rem' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  )
}
