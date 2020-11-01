import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Minnesota</p>
      <Link to="/about">Learn About Me &rarr;</Link>
      <h2>Read my blog</h2>
      {posts.map(post => (
        // <pre>{JSON.stringify(post, null, 2)}</pre>
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
