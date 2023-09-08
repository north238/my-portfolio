'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          backgroundColor: '#EBEDED',
          mt: 10,
          py: 2,
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            &copy; 2023 Fumiya Kitayama 
          </Typography>
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default Footer;
