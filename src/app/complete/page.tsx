import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

const Complete = () => {
  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box>
            <Image
              src={'/image/img_complete_01.jpg'}
              alt={'complete画像'}
              width={1980}
              height={1150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h5"
              sx={{ mt: 5, borderBottom: '1px solid #3a302d' }}
            >
              内容確認
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Typography variant="body1">
                お問い合わせいただきありがとうございます。
                <br />
                内容を確認後返信させていただきます。
                <br />
                しばらくお待ちください。
              </Typography>
            </Box>
          </ThemeProvider>
        </Paper>
      </Container>
    </>
  );
};

export default Complete;
