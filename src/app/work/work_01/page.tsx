import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Work: React.FC = () => {
  return (
    <>
      <Container fixed sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Button
            color="inherit"
            href="/work"
            startIcon={<ChevronLeftIcon />}
            aria-label="workページへ移動"
          >
            戻る
          </Button>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mt: 2, borderBottom: '1px solid' }}
          >
            01_ 庭屋すぎ蔵
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              【使用言語】JavaScript
              <br />
              【フレームワーク】Next.js URL:
              <Link href={'https://nextjs.org'}>https://nextjs.org</Link>
              <br />
              【ライブラリ】MaterialUI URL:
              <Link href={'https://mui.com'}>https://mui.com</Link>
              <br />
              【ライブラリ】Resend URL:
              <Link href={'https://resend.com'}>https://resend.com</Link>
              <br />
              【ライブラリ】React Email URL:
              <Link href={'https://react.email'}>https://react.email</Link>
              <br />
            </Typography>
            <Typography variant="body1" gutterBottom>
              上記を使用して作られています。JavaScriptを学んできたのでNext.jsは扱いやすく感じています。Muiに関しても扱えるcomponentが多く、開発時間がかなり短縮される印象。このホームページでの一番苦戦したところはResendとReact
              Emailを設定するところです。新しい技術で参考資料がなく手間取りました。装飾されたメールが送信できるようになり感動しました。おすすめのライブラリです。
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Image
              src={'/image/img_work_01.png'}
              alt={'庭屋すぎ蔵画像'}
              width={1980}
              height={1150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '5px',
                boxShadow: '5px 5px 5px rgba(20,20,20,.7)',
              }}
            />
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Work;
