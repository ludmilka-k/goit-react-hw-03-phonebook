import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 12px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  border-radius: 4px;
  gap: 8px;
  font-weight: bold;
  margin-top: 12px;
`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: 500;
  padding-left: 5px;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;


export const Delete = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  &:hover {
    background-color: yellow;
    border: 1px solid yellow;
  }

  &:active {
    background-color: yellow;
    border: 1px solid yellow;
    box-shadow: none;
    transform: translateY(1px);
  }
`;

