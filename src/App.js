import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts';
import { Form } from './components/Form/Form';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const ImgStyles = {
  marginLeft: '15px',
  maxWidth: '80px'
}

const AppBarStyles = {
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

const HeadingStyles = {
  color: 'rgba(0,183,255, 1)',
}


const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

  return (
      <Container maxWidth='lg' style={{}}>
        <AppBar position='static' color='inherit' style={{...AppBarStyles}}>
          <Typography variant='h2' align='center' style={{...HeadingStyles}}>Memories</Typography>
          <img style={{...ImgStyles}} src={memories} alt='memories.png' /> ;
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" align-items="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  )
}

export default App