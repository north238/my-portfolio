import React from 'react';
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
        <ThemeProvider theme={theme}>
          <Typography
            variant="h5"
            sx={{ mt: 2, borderBottom: '1px solid #3a302d' }}
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
            <Box sx={{ mt: 2 }}>
          </Box>
        </ThemeProvider>
        </Paper>
      </Container>
    </>
  );
};

export default Complete;
