import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  // console.log(props)

  return (
    <div className='posts-container-wrapper'>
      <h1>POSTS</h1>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {posts.map((item) => {
        return <Post post={item} key={item.id} likePost={likePost}/>
      })}

    </div>
  );
};

export default Posts;
