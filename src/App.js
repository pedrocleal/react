import React from 'react';

import Header from './Header';
import Post from './Post';

const posts = [
  {
    id: 1,
    title: 'PRIMEIRO POST',
    desc: 'Descrição do primeiro post',
    likes: 3
  },
  {
    id: 2,
    title: 'SEGUNDO POST',
    desc: 'Descrição do segundo post',
    likes: 2
  },
  {
    id: 3,
    title: 'TERCEIRO POST',
    desc: 'Descrição do terceiro post',
    likes: 1
  },
]

function App() {
  return (
    <>
      <Header />

      <hr/>

      {posts.map((post) => (
        <Post 
          likes={post.likes}
          key={post.id}
          title={post.title}
          desc={post.desc}
        />
      ))}
    </>
  )
}

export default App