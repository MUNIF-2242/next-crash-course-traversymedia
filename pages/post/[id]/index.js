import Link from 'next/link';
import React from 'react';

function post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <br />
      <Link href='/'>Go Back</Link>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const post = await res.json();

//   // Pass data to the page via props
//   return { props: { post } };
// }

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export default post;
