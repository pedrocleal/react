import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';

const initialPosts = [
  {
    id: 1,
    title: '1º POST',
    desc: 'Descrição do 1º post',
    likes: 3
  },
  {
    id: 2,
    title: '2º POST',
    desc: 'Descrição do 2º post',
    likes: 2
  },
  {
    id: 3,
    title: '3º POST',
    desc: 'Descrição do 3º post',
    likes: 1
  },
]

function App() {

  const [ posts, setPosts ] = useState(initialPosts);

  function handleAdd() {
    // Para usar o prevState e evitar bugs na interface, é necessário executar uma função anonima na chamada de setState
    setPosts((prevState) => [ 
      ...prevState, //spread para capturar os dados já existentes no array
      {
        id: posts.length + 1,
        title: `${posts.length + 1}º POST`,
        desc: `Descrição do ${posts.length + 1}º POST`,
        likes: `${posts.length + Math.random()}`
      }
    ])
  }

  function handleClear() {
    setPosts([]);
  }

  return (
    <>
      <Header> 
        <button onClick={handleAdd}>Adicionar novo post</button>
        <button onClick={handleClear}>Limpar</button>
      </Header>

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