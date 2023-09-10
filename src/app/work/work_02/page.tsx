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
            02_ TodoList
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              【使用言語】TypeScript URL:
              <Link href={'https://www.typescriptlang.org'}>
                https://www.typescriptlang.org
              </Link>
              <br />
              【使用教材】Understanding TypeScript日本語版 URL:
              <Link
                href={
                  'https://www.udemy.com/share/103eLk3@vxs-OndKkdkrgD19NSsSNUOx9h0HESe4uNS3hP8maKuwsJzz0p3aChkf4rx4sUaydg==/'
                }
              >
                Udemy
              </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              こちらはUdemy教材でTypeScriptを学ぶために作成したアプリケーションです。TypeScriptは事前にエラーを示してくれる技術。
              どこが間違っているのか？がわかりやすくなり開発がよりスムーズになります。こちらの教材ではオブジェクト指向での記述を学ぶのですが、理解できずに苦労しました。
              簡単にまとめるのならば『クラスを使って抽象化すること』です。改めて気が付いたことですがこれはNext.jsのcomponentの考えに似ています。
              コードの可読性をあげることもエンジニアにとって重要だと学びました。
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Image
              src={'/image/img_work_02.png'}
              alt={'TodoList画像'}
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
