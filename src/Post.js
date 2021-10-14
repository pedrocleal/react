import React from 'react';

function Post({ id, title, desc, likes, onRemove, onRead, read }) {
  return (
    <article>
      {read ? <strong><s>{title}</s></strong> : <strong>{title}</strong>}
      <button onClick={() => onRemove(id)}>Remover</button> 
      <button onClick={() => onRead(id)}>Marcar como lido</button>
      <br/>
      <small>{desc}</small>
      <br/>
      LIKES = {likes}
      <br/><br/>
    </article>
  )
}

export default Post