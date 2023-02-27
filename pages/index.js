import PostLists from '@/components/PostLists';

export default function Home({ posts }) {
  //console.log(posts);
  return (
    <>
      <h1>Home</h1>
      <PostLists posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
