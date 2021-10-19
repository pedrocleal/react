import React from 'react';
import Button from '../Button';

import { Title, PostContainer, Description, MainContainer } from './styles';

function Post({ id, title, desc, onRemove, onRead, read}) {

  return (
    <MainContainer read={read}>
      <PostContainer>
        <strong>{title}</strong>
        <div>
          <Button onClick={() => onRemove(id)}>Remover</Button> 
          <Button onClick={() => onRead(id)}>Marcar como lido</Button>
        </div>
      </PostContainer>
      <Description>{desc}</Description>
    </MainContainer>
  )
}

export default Post