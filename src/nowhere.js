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
          fontSize: 4,
          color: 'primary',
          backgroundColor: 'papayawhip',
          width: ['100%', '50%', '25%'],
        }}
      >
        Nowhere
      </div>
      <Button onClick={() => navigate('/')}>Home</Button>
    </Box>
  )
}
