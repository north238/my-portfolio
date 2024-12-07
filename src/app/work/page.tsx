import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CustomizedButtons from '../components/Button';

const work: React.FC = () => {
  return (
    <>
      <Container>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h4" sx={{ borderBottom: '1px solid' }}>
            Work
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{ borderBottom: '1px solid', display: 'inline-block' }}
              gutterBottom
            >
              01_ 庭屋すぎ蔵
            </Typography>
            <Box sx={{ mx: 2 }}>
              <Typography variant="body1" gutterBottom>
                友人からの依頼を受けてホームページを作成しました。自身で作成したWordPressのサイトに満足がいかず相談を受けました。イメージしていたことが実現できたと喜んでもらえました。
              </Typography>
              <Typography variant="body2" gutterBottom>
                URL:
                <Link
                  href="https://www.garden-sugizo.website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.garden-sugizo.website
                </Link>
              </Typography>
            </Box>
            <Box sx={{ m: 2 }}>
              <CustomizedButtons
                text="詳細ページへ"
                url="/work/work_01"
                ariaLabel="詳細ページへ移動"
              />
            </Box>
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
          </Paper>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{ borderBottom: '1px solid', display: 'inline-block' }}
              gutterBottom
            >
              02_ TodoList
            </Typography>
            <Box sx={{ mx: 2 }}>
              <Typography variant="body1" gutterBottom>
                Udemyの教材でTypeScriptを学習中に作成したものです。ドラッグ＆ドロップの実装に苦戦しました。スマホでの実装はできていません。
              </Typography>
              <Typography variant="body2" gutterBottom>
                URL:
                <Link
                  href="https://north238.github.io/todoList"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://north238.github.io/todoList
                </Link>
              </Typography>
            </Box>
            <Box sx={{ m: 2 }}>
              <CustomizedButtons
                text="詳細ページへ"
                url="/work/work_02"
                ariaLabel="詳細ページへ移動"
              />
            </Box>
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
          </Paper>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{ borderBottom: '1px solid', display: 'inline-block' }}
              gutterBottom
            >
              03_ MY資産
            </Typography>
            <Box sx={{ mx: 2 }}>
              <Typography variant="body1" gutterBottom>
                世の中には資産管理アプリはたくさんあります。ですが一定の期間から有料になるものがほとんどです。永遠に管理したいと思い作成しました。
              </Typography>
            </Box>
            <Box sx={{ m: 2 }}>
              <CustomizedButtons
                text="詳細ページへ"
                url="/work/work_03"
                ariaLabel="詳細ページへ移動"
              />
            </Box>
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
          </Paper>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{ borderBottom: '1px solid', display: 'inline-block' }}
              gutterBottom
            >
              04_ Stocker
            </Typography>
            <Box sx={{ mx: 2 }}>
              <Typography variant="body1" gutterBottom>
                「家じゅうの在庫が管理できたらいいね」と妻に言われたことがきっかけで作成しました。こだわりポイントは『文字を極力少なく』『ぱっと見でわかるように』を意識しました。
              </Typography>
            </Box>
            <Box sx={{ m: 2 }}>
              <CustomizedButtons
                text="詳細ページへ"
                url="/work/work_04"
                ariaLabel="詳細ページへ移動"
              />
            </Box>
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
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default work;
