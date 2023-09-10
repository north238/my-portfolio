import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomizedButtons from './components/Button';
import Image from 'next/image';
import styles from './styles/page.module.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import { LogoIcon } from './components/Icon';
import ImageSlider from './components/ImageSlider';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

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
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '3rem', md: '4rem' } }}
            >
              PORTFOLIO
            </Typography>
            <Typography variant="subtitle1">by Fumiya Kitayama</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              このサイトをご覧いただきありがとうございます。自作したWebアプリケーションの数々をぜひ見ていってください。
            </Typography>
          <Box sx={{ mx: 'auto', mt: 5, maxWidth: '200px' }}>
            <CustomizedButtons
              text="More View"
              url="#work"
              ariaLabel="workへ移動"
            />
          </Box>
        </Box>
      </Box>
      <Container>
        <Toolbar id="work" />
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" sx={{ borderBottom: '1px solid' }}>
            Work
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, mx: 2 }}>
            プログラミングで作成した作品です。自身や家族や友人から相談された困りごとから作成したものです。使用した言語やライブラリやツールを書いてあります。気になるものがあればご確認ください。あなたのお役に立てれば幸いです。
          </Typography>
          <Box sx={{ mt: 2 }}>
            <CustomizedButtons
              text="More View"
              url="/work"
              ariaLabel="workページへ移動"
            />
          </Box>
        </Box>
      </Container>
      <Box sx={{ mt: 2 }}>
        <ImageSlider />
      </Box>
    </div>
  );
}
