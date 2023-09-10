'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NeoButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '1rem',
  padding: '10px 25px',
  border: '1px solid',
  borderRadius: '50px',
  lineHeight: 1.5,
  backgroundColor: '#eee',
  borderColor: 'rgba(57, 56, 56, 0.6)',
  color: '#313131',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#313131',
    borderColor: '#313131',
    boxShadow: 'none',
    color: '#FFF',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#313131',
    borderColor: '#313131',
    color: '#FFF',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(49,49,49,.5)',
  },
});

interface CustomizedButtonProps {
  text: string;
  url: string;
  ariaLabel: string;
}

const CustomizedButtons: React.FC<CustomizedButtonProps> = (props) => {
  return (
    <NeoButton
      variant="contained"
      endIcon={<NavigateNextIcon />}
      href={`${props.url}`}
      aria-label={props.ariaLabel}
      disableRipple
    >
      {props.text}
    </NeoButton>
  );
};

export default CustomizedButtons;
