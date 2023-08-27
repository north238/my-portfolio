import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styles from './styles/page.module.css';

export default function Home() {
  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <Typography variant='h1'>
          PORTFOLIO
        </Typography>
        <Typography variant='subtitle1'>
          by Fumiya Kitayama
        </Typography>
      </Box>
    </>
  );
}
