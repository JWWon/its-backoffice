import styled from 'styled-components';

const baseFont = styled.p`
  font-size: ${props => props.theme.font.normal};
  color: ${props => props.theme.color.white};
`;

export const NContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  padding: 0 ${props => props.theme.space.normal}rem;
  background-color: ${props => props.theme.color.darkBlue};
`;

export const NLogo = baseFont.extend`
  font-weight: bold;
  margin-right: ${props => props.theme.space.normal}rem;
`;

export const NWrapper = styled.div`
  display: flex;
`;

export const NAdmin = baseFont;
