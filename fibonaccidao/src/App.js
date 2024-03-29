import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { main } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main />
    </div>
  );
}

