'use client';

import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import Loading from './loading';

type Form = {
  name: string;
  email: string;
  message: string;
};

const contactSchema = yup.object().shape({
  name: yup.string().trim().required('お名前の入力は必須です'),
  email: yup
    .string()
    .trim()
    .email('メールアドレスの形式で入力してください。')
    .required('メールアドレスの入力は必須です'),
  message: yup
    .string()
    .trim()
    .required('お問い合わせ内容の入力は必須です')
    .max(1000, '1000文字以内で入力してください'),
});

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { control, handleSubmit } = useForm<Form>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Form> = async (data) => {
    setIsLoading(true);
    try {
      const response: Response = await fetch('api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        try {
          const responseData = await response.json();
          console.log(responseData);
          router.push('/complete');
        } catch (error) {
          console.error('レスポンスデータの解析エラー:', error);
        }
      } else {
        alert('正常に送信できませんでした');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4 }}>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h5"
              sx={{ mt: 2, borderBottom: '1px solid #3a302d' }}
            >
              お問い合わせ
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                お問い合わせは下記のフォームからご連絡ください。
                お仕事のご依頼もよろこんでお受けいたします。
              </Typography>
            </Box>
          </ThemeProvider>
          <Box
            component="form"
            sx={{
              mt: 2,
              width: '100%',
              display: 'flex',
              alignContent: 'center',
              flexDirection: 'column',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field, formState: { errors } }) => (
                  <TextField
                    {...field}
                    autoFocus
                    required
                    fullWidth
                    autoComplete="on"
                    id="name"
                    type="text"
                    label="お名前"
                    margin="dense"
                    error={errors.name ? true : false}
                    helperText={errors.name?.message as string}
                  />
                )}
              />
            </Box>
            <Box>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field, formState: { errors } }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    autoComplete="on"
                    id="email"
                    type="email"
                    label="メールアドレス"
                    margin="dense"
                    error={errors.email ? true : false}
                    helperText={errors.email?.message as string}
                  />
                )}
              />
            </Box>
            <Box>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field, formState: { errors } }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    multiline
                    rows={5}
                    autoComplete="on"
                    id="message"
                    type="text"
                    label="お問い合わせ内容"
                    margin="dense"
                    error={errors.message ? true : false}
                    helperText={errors.message?.message as string}
                    sx={{ minHeight: '120px', resize: 'none' }}
                  />
                )}
              />
            </Box>
            <Box sx={{ mt: 2 }} textAlign="left">
              {isLoading ? (
                <Loading />
              ) : (
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSubmit(onSubmit)}
                  aria-label="送信する"
                >
                  送信する
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Contact;
