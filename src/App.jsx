import { useState } from 'react'
import {Box,Container, Typography} from '@mui/material'
import { InstagramMenu } from './components/InstagramMenu'
import {InstagramContent} from './components/InstagramContent'

function App() {

  return (
    <>
    <Container maxWidth="100%" style={{display:"flex"}}>
      <Box sx={{width:"245px"}}>
        <InstagramMenu />
      </Box>
      <Box sx={{flexGrow: 1}}>
        <InstagramContent />
      </Box>
      <Box sx={{flexGrow: 1}}>
      </Box>
    </Container>
    </>
  )
}

export default App
