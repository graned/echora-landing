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
          bgcolor: 'background.paper',
          border: `1px solid ${color}`,
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
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  )
}
