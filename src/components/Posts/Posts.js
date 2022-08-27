import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'

const Posts = () => {
  const posts = useSelector((state) => state.posts)

  console.log(posts)
  return (
    <div>
      <Post />
      <h1>Posts</h1>
    </div>
  )
}

export default Posts