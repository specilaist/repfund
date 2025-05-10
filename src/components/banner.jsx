"use client";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import replogo from '../../public/ _REP Fund_ ..jpg'

export default function Banner() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true}>
        <Box sx={{         
        backgroundImage: 'url(/images/repFundLogo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh', // Full height
        width: '100%',   // Full width
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textShadow: '1px 1px 4px rgba(0,0,0,0.7)', }} />
      </Container>
    </React.Fragment>
  );
}
