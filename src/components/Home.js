import React from 'react';
import CreatePost from '../containers/post/CreatePost';
import AllPosts from '../containers/post/AllPosts';
import styles from './Home.css';

export default function Home() {
  return (
    <>
      <section className={styles.CreatePost}>
        <h2>Create Post</h2>
        <CreatePost />
      </section>
      <h2>Posts:</h2>
      <section>
        <AllPosts />
      </section>
    </>
  );
}
