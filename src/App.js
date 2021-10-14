import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';

const initialPosts = [
  {
    id: 1,
    title: '1º POST',
    desc: 'Descrição do 1º post',
    likes: 3,
    read: false,
  },
  {
    id: 2,
    title: '2º POST',
    desc: 'Descrição do 2º post',
    likes: 2,
    read: false,
  },
  {
    id: 3,
    title: '3º POST',
    desc: 'Descrição do 3º post',
    likes: 1,
    read: false,
  },
]

function App() {

  const [ posts, setPosts ] = useState(initialPosts);

  function handleAddPost() {
    // Para usar o prevState e evitar bugs na interface, é necessário executar uma função anonima na chamada de setState
    setPosts((prevState) => [ 
      ...prevState, //spread para capturar os dados já existentes no array
      {
        id: posts.length + 1,
        title: `${posts.length + 1}º POST`,
        desc: `Descrição do ${posts.length + 1}º POST`,
        likes: `${posts.length + Math.random()}`,
        read: false,
      }
    ])
  }

  //Essa função limpa todos os Posts da tela
  function handleClearPosts() {
    setPosts([]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter(post => post.id !== postId)); //Filter retorna os itens que a condicional retornar true
  }

  function handleReadPost(postId) {
    console.log(`${postId} foi marcado como lido`);
  }

  return (
    <>
      <Header> 
        <button onClick={handleAddPost}>Adicionar novo post</button>
        <button onClick={handleClearPosts}>Limpar</button>
      </Header>

      <hr/>

      {posts.map((post) => (
        <Post
          onRemove={handleRemovePost} 
          onRead={handleReadPost}
          id={post.id}
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