/* tslint:disable:jsx-no-lambda */
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import * as s from './ImageTable.styled';

import ImageEdit from 'components/dashboard/ImageEdit';
import { ImageInterface } from 'lib/networks/image';
import { show } from 'store/modules/modal';

interface Props {
  list: ImageInterface[];
  type: 'slide' | 'news';
  showModal: (label: string, component: ReactNode) => void;
}

class ImageTable extends React.Component<Props> {
  public render() {
    const { list, type } = this.props;
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
              {type === 'news' && (
                <>
                  <th>제목</th>
                  <th>내용</th>
                </>
              )}
              <th />
            </tr>
          </s.Head>
          <s.Body>
            {list.map(this.Body)}
            <tr />
          </s.Body>
        </s.Table>
      </s.Container>
    );
  }

  private Body = (value: ImageInterface) => (
    <tr key={value.id}>
      <td>{value.id}</td>
      <td>
        <s.ImageDesktop
          style={{ backgroundImage: `url(${value.desktopSrc})` }}
        />
      </td>
      <td>
        <s.ImageMobile style={{ backgroundImage: `url(${value.mobileSrc})` }} />
      </td>
      <td>{value.href}</td>
      <td>{value.alt}</td>
      {this.props.type === 'news' && (
        <>
          <td>{value.title}</td>
          <td>{value.content}</td>
        </>
      )}
      <td>
        <s.ButtonWrapper>
          <s.EditButton onClick={e => this.handleEdit(e, value)}>
            Edit
          </s.EditButton>
          <s.DeleteButton>Delete</s.DeleteButton>
        </s.ButtonWrapper>
      </td>
    </tr>
  );

  private handleEdit = (
    e: React.FormEvent<HTMLButtonElement>,
    value: ImageInterface
  ) => {
    e.preventDefault();
    this.props.showModal(
      '슬라이드 편집',
      <ImageEdit type={this.props.type} {...value} />
    );
  };
}

export default connect(
  () => ({}),
  dispatch => ({
    showModal: (label: string, component: ReactNode) =>
      show(label, component)(dispatch),
  })
)(ImageTable);
