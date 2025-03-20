import { Box } from '@mui/material'

export default function EchoraLogo() {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="90"  // Reduced from 120
      height="30" // Reduced from 40
      viewBox="0 0 120 40"
      sx={{
        '& path': {
          transition: 'fill 0.3s ease'
        },
        '&:hover path': {
          fill: 'url(#logoGradient)'
        }
      }}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#DE8872', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#AED9D6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M10 20C10 14.477 14.477 10 20 10H100C105.523 10 110 14.477 110 20V30C110 35.523 105.523 40 100 40H20C14.477 40 10 35.523 10 30V20Z"
        fill="#DE8872"
      />
      <path
        d="M25 15L35 25L25 35"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 15L55 25L45 35"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 15L75 25L65 35"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M85 15L95 25L85 35"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  )
}
