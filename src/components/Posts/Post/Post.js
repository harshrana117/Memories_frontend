import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import moment from 'moment'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const CardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}

const MediaStyles = {
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
}

const OverlayStyles = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
}

const Overlay2Styles = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
}

const GridStyles = {
  display: 'flex',
}

const DetailsStyles =  {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
}

const TitleStyles = {
  padding: '0 16px',
}

const CardActionsStyles = {
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
}

const BorderStyles = {
  border: 'solid',
}

const fullHeightCard = {
  height: '100%',
}


const Post = ({post}) => {
  return (
    <Card style={{...CardStyles}}>
      <CardMedia style={{...MediaStyles}} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div style={{...OverlayStyles}}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div style={{...Overlay2Styles}}>
        <Button style={{ color: 'white' }} size="small" onClick={() => {}}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div style={{...DetailsStyles}}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography style={{...TitleStyles}} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions style={{...CardActionsStyles}}>
        <Button size="small" color="primary" onClick={() => {}}><ThumbUpIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => {}}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  )
}

export default Post