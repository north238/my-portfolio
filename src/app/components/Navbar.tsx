'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import LongMenu from './LongMenu';
import styles from './Navbar.module.css';

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'Work', url: '/work' },
  { name: 'Contact', url: '/contact' },
];

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <div className={styles.nav}>
      <Box
        component="nav"
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box sx={{ ml: 5 }}>
          <Image
            priority
            src={'/image/logo.png'}
            alt={'logo画像'}
            width={70}
            height={70}
          />
        </Box>
        <Box sx={{ mr: 3, display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              className={
                currentRoute === `${item.url}`
                  ? styles.activeStyle
                  : styles.nonActiveStyle
              }
              key={item.name}
              href={`${item.url}`}
              sx={{ color: 'inherit', px: 2, fontWeight: 500, textTransform: 'none' }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' }, px: 2 }}>
          <LongMenu />
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
