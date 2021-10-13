import React from 'react';

function Post({ title, desc, likes }) {
  return (
    <article>
      <strong>{title}</strong>
      <br/>
      <small>{desc}</small>
      <br/>
      LIKES = {likes}
      <br/><br/>

    </article>
  )
}

export default Post