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
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          backgroundColor: '#EBEDED',
          py: 2,
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography gutterBottom>
            <Button
              href="https://github.com/north238"
              color="inherit"
              sx={{ textTransform: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </Button>
          </Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{ mt: 1 }}
            gutterBottom
          >
            &copy; 2023 Fumiya Kitayama
          </Typography>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default Footer;
