import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const work_03: React.FC = () => {
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
            03_ MY資産
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              【使用言語】JavaScript
              <br />
              【プラットフォーム】Node.js
              <br />
              【データベース】MongoDB URL:
              <Link href={'https://www.mongodb.com/ja-jp'}>
                https://www.mongodb.com
              </Link>
              <br />
              【フレームワーク】Express URL:
              <Link href={'https://expressjs.com/ja/'}>
                https://expressjs.com
              </Link>
              <br />
              【ライブラリ】Mongoose, Bootstrap, axios...
              <br />
              【使用教材】Web Developer Bootcamp2023日本語版
              <br />
              URL:
              <Link
                href={
                  'https://www.udemy.com/share/105zPc3@pV8ffKlPgfzt9vwICBjdJLXiqtTSHdpfsegL0PpB4JigWeq9MOxrFYdyCXMwcRDt1Q==/'
                }
              >
                Udemyリンク
              </Link>
              <br />
            </Typography>
            <Typography variant="body1" gutterBottom>
              こちらはUdemy教材でWebエンジニアの基礎を学ぶことができます。ここからプログラミングやWebエンジニアへの興味が増していったことを実感しています。
              <br />
              このアプリケーションについてですが、教材内で作成するデモアプリからアイデアをもらいました。名前の通り自身の資産を管理することができる資産管理アプリケーションです。
              ログイン機能からデータベースへのデータの保管まで実装されています。初めて作ったWebアプリケーションですので、愛着があり気に入っています。
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Image
              src={'/image/img_work_03.png'}
              alt={'MY資産画像'}
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

export default work_03;
