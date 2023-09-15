'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          position: 'sticky',
          flexDirection: 'column',
          textAlign: 'center',
          backgroundColor: '#EBEDED',
          mt: 10,
          py: 2,
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography gutterBottom>
            <Button href='https://github.com/north238' color='inherit' sx={{textTransform: 'none'}}><GitHubIcon /></Button>
          </Typography>
          <Typography variant="caption" display="block" sx={{ mt: 1 }} gutterBottom>
            &copy; 2023 Fumiya Kitayama 
          </Typography>
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default Footer;
