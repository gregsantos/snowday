/** @jsx jsx */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { jsx, Box, Button } from 'theme-ui'

export default props => {
  let navigate = useNavigate()

  return (
    <Box sx={{ mb: 4, p: 4 }}>
      <div
        sx={{
          mb: 4,
          p: 2,
          fontWeight: 'bold',
          fontSize: 4, // picks up value from `theme.fontSizes[4]`
          color: 'primary', // picks up value from `theme.colors.primary`
          backgroundColor: 'papayawhip',
          width: ['100%', '50%', '25%'],
        }}
      >
        Login
      </div>
      <Button onClick={() => navigate('/')}>Home</Button>
      <p>
        <Link to='/nowhere'>Nowhere</Link>
      </p>
    </Box>
  )
}
