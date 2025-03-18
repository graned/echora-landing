import { Card, CardContent, Typography, Avatar } from '@mui/material'

export default function TeamMemberCard({ name, role, description }: {
  name: string
  role: string
  description: string
}) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ mr: 2 }}>{name[0]}</Avatar>
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
