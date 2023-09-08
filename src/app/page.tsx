import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styles from './styles/page.module.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { LogoIcon } from './components/Icon';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Home() {
  return (
    <div>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
          <Image
            src={'/image/img_01.jpg'}
            alt={'ホーム画像'}
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>
        <Box
          className={styles.mainText}
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h2">PORTFOLIO</Typography>
            <Typography variant="subtitle1">by Fumiya Kitayama</Typography>
            <Typography variant="body1" sx={{mt: 1}}>
              このサイトをご覧いただきありがとうございます。
            </Typography>
          </ThemeProvider>
          <Button
            sx={{ textTransform: 'none', mx: 'auto', mt: 5, maxWidth: '200px' }}
            endIcon={<NavigateNextIcon />}
            variant="contained"
            color='inherit'
          >
            More View
          </Button>
        </Box>
      </Box>
    </div>
  );
}
