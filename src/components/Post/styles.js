import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 100%;
  height: 80px;
  padding: 24px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  background: #333;
  border-radius: 24px;

  opacity: ${(props) => props.read ? 0.4 : 1};
`;
 
export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #fafafa;
    border-radius: 12px;
  }

`;

export const Description = styled.span`
  margin-top: 12px;
`;

export const Small = styled.small`
  font-size: 12px;
`;