import Link from 'next/link';
import React from 'react';

function PostItem({ post }) {
  return (
    <div>
      <Link href='/post/[id]' as={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
    </div>
  );
}

export default PostItem;
