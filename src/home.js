/** @jsx jsx */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { jsx, Box, Label, Input, Button } from 'theme-ui'

export default props => {
  let navigate = useNavigate()

  return (
    <Box sx={{ mb: 4, p: 4 }}>
      <Label htmlFor='search'>Search</Label>
      <Input id='search' name='search' {...props} sx={{ my: 3 }} />
      <Button onClick={() => navigate('/login')}>Login</Button>
      <p>
        <Link to='nowhere'>Nowhere</Link>
      </p>
    </Box>
  )
}
