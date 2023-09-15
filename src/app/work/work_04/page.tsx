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
            04_ Stocker
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              【使用言語】JavaScript
              <br />
              【プラットフォーム】Node.js
              <br />
              【ライブラリ】React URL:
              <Link href={'https://ja.legacy.reactjs.org'}>
                https://ja.legacy.reactjs.org
              </Link>
              <br />
              【データベース】MongoDB URL:
              <Link href={'https://www.mongodb.com/ja-jp'}>
                https://www.mongodb.com
              </Link>
              <br />
              【フレームワーク】Express URL:
              <Link href={'https://expressjs.com/ja'}>
                https://expressjs.com
              </Link>
              <br />
              【ライブラリ】Mongoose, mui, axios...
            </Typography>
            <Typography variant="body1" gutterBottom>
              こちらのWebアプリケーションはReactを学びながら作成したものになります。初めて触れる技術でしたが多くの参考資料があり、迷子になることはありませんでした。
              <br />
              こだわりのポイントは「操作性」です。使ってもらう相手のことを考えて開発しました。ひと目でこれは何をするボタンなのかを理解できるように考えています。
              <br />
              反省点としては「Next.jsと同時に学ぶべきだったこと」です。より早く、そして学習コストもかからずに開発できたと思います。新しい技術はしっかりとキャッチしていきたいと感じました。
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Image
              src={'/image/img_work_04.png'}
              alt={'Stocker画像'}
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
