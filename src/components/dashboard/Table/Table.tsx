import React from 'react';
import * as s from './Table.styled';

interface DataInterface {
  index: number;
  desktopURL: string;
  mobileURL: string;
  link: string;
  seo: string;
}

interface Props {
  list: DataInterface[];
}

class Table extends React.Component<Props> {
  public render() {
    const { list } = this.props;
    return (
      <s.Container>
        <s.Table>
          <s.Head>
            <tr>
              <th>번호</th>
              <th>데스크탑</th>
              <th>모바일</th>
              <th>하이퍼링크</th>
              <th>SEO 텍스트</th>
              <th />
            </tr>
          </s.Head>
          <s.Body>
            {list.map(data => this.Body(data))}
            <tr />
          </s.Body>
        </s.Table>
      </s.Container>
    );
  }

  private Body = ({
    index,
    desktopURL,
    mobileURL,
    link,
    seo,
  }: DataInterface) => (
    <tr key={index}>
      <td>{index}</td>
      <td>
        <s.ImageDesktop style={{ backgroundImage: `url(${desktopURL})` }} />
      </td>
      <td>
        <s.ImageMobile style={{ backgroundImage: `url(${mobileURL})` }} />
      </td>
      <td>{link}</td>
      <td>{seo}</td>
      <td>
        <s.ButtonWrapper>
          <s.EditButton>Edit</s.EditButton>
          <s.DeleteButton>Delete</s.DeleteButton>
        </s.ButtonWrapper>
      </td>
    </tr>
  );
}

export default Table;
