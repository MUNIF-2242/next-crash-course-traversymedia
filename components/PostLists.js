import React from 'react';
import PostItem from './PostItem';

function PostLists({ posts }) {
  const { post, id } = posts;
  return (
    <div>
      <ul>
        {posts.map((post, id) => (
          <PostItem key={id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostLists;
