'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Image from 'next/image';
import LongMenu from './LongMenu';

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'Work', url: '/work' },
  { name: 'Contact', url: '/contact' },
];

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Box
        component="nav"
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Image
            src={'/image/logo.png'}
            alt={'logo画像'}
            width={70}
            height={70}
          />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              href={`${item.url}`}
              sx={{ color: 'inherit', px: 2 }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <LongMenu />
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
