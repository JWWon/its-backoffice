import icDelete from 'lib/icons/ic_delete.svg';
import styled from 'styled-components';

export const Container = styled.div`
  flex-basis: 40rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.normal}rem;
`;

export const Label = styled.h5`
  font-size: ${({ theme }) => theme.font.normal};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const AddButton = styled.button`
  margin-left: auto;
  background: ${({ theme }) => theme.color.gray};
`;

const Input = styled.input.attrs({ type: 'text' })`
  padding: ${({ theme }) => theme.space.small}rem 0;
  font-size: ${({ theme }) => theme.font.small};
  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
  color: ${({ theme }) => theme.color.black};
  &:first-of-type {
    margin-right: 1.2rem;
  }
`;

export const Key = styled(Input)`
  width: 24%;
`;

export const Value = styled(Input)`
  width: 74%;
`;

const deleteSize: number = 2.4;
export const Delete = styled.div`
  visibility: hidden;
  margin-left: 0.6rem;
  width: ${deleteSize}rem;
  height: ${deleteSize}rem;
  border-radius: ${deleteSize / 2}rem;
  background: #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteIcon = styled.img.attrs({
  src: icDelete,
  alt: 'delete object',
})`
  width: ${deleteSize * 0.52}rem;
  height: ${deleteSize * 0.52}rem;
  &:hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    ${Delete} {
      visibility: visible;
    }
  }
`;
