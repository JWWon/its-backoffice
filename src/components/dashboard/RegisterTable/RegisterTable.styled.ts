import styled from 'styled-components';

export const CertifWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

interface Theme {
  theme: {
    type: 'specialist' | 'association' | 'invisalign';
    active: boolean;
  };
}

export const CertifIcon = styled.img.attrs({
  src: ({ theme }: Theme) =>
    require(`lib/icons/ic_${theme.type}${theme.active ? '_active' : ''}.svg`),
})`
  width: 3.4rem;
  height: 3rem;
  object-fit: contain;
`;
