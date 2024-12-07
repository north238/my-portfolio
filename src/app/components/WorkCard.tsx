'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface WorkCardProps {
  img: string;
  alt: string;
  title: string;
  text: string;
  caption: string;
  url: string;
}

const WorkCard: React.FC<WorkCardProps> = (props) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: { xs: 350, md: 500 },
        minHeight: { xs: 305, md: 515, lg: 660 },
      }}
    >
      <CardActionArea href={`${props.url}`}>
        <CardMedia
          component="img"
          image={`/image/${props.img}.png`}
          alt={`${props.alt}`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: { xs: 16, md: '2rem' } }}
          >
            {props.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: 10, md: 17 }, overflow: 'hidden' }}
          >
            {props.text}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: { xs: 5, md: 14 }, overflow: 'hidden' }}
          >
            {props.caption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href={`${props.url}`}
          sx={{ textTransform: 'none', fontSize: { xs: 7, md: 14 } }}
        >
          More View
          <ChevronRightIcon sx={{ fontSize: { xs: 7, md: 16 } }} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkCard;
