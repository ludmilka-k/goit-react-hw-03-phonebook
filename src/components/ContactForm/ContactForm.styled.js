import styled from '@emotion/styled';

export const Form = styled.form`
  width: 320px;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
`;

export const InputForm = styled.input`
  display: block;
  font-size: 14px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(46, 47, 66, 0.08);

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

