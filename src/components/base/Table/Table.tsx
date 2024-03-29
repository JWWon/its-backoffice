/* tslint:disable:jsx-no-lambda */
import React, { Component, ReactNode } from 'react';
import ReactPaginate from 'react-paginate';
import * as s from './Table.styled';

interface Data {
  [x: string]: any;
}

interface Props {
  header: string[];
  list: Data[];
  body: (x: any) => ReactNode;
  handleEdit: (e: React.FormEvent<HTMLButtonElement>, data: any) => void;
  handleDelete: (e: React.FormEvent<HTMLButtonElement>, id: string) => void;
  count?: number;
}

interface State {
  startNum: number;
}

class Table extends Component<Props, State> {
  public state: State = { startNum: 0 };

  public render() {
    const { header, count, list } = this.props;
    let slicedList;
    if (count) {
      const startCount = this.state.startNum * 10;
      if (count === this.state.startNum + 1) {
        slicedList = list.slice(startCount, list.length);
      } else {
        slicedList = list.slice(startCount, startCount + 10);
      }
    } else {
      slicedList = list;
    }

    return (
      <s.Container>
        <s.Table>
          <s.Head>
            <tr>
              {header.map(title => (
                <th key={title}>{title}</th>
              ))}
              <th />
            </tr>
          </s.Head>
          <s.Body>
            {slicedList.map(this.Body)}
            <tr />
          </s.Body>
        </s.Table>
        {count && (
          <ReactPaginate
            pageCount={count}
            breakLabel={<a href="">...</a>}
            pageRangeDisplayed={8}
            marginPagesDisplayed={2}
            onPageChange={this.handlePageClick}
            containerClassName="page-container"
            pageClassName="page-item"
          />
        )}
      </s.Container>
    );
  }

  private Body = (data: Data) => (
    <tr key={data.id}>
      {this.props.body(data)}
      <td>
        <s.ButtonWrapper>
          <s.EditButton onClick={e => this.props.handleEdit(e, data)}>
            Edit
          </s.EditButton>
          <s.DeleteButton onClick={e => this.props.handleDelete(e, data.id)}>
            Delete
          </s.DeleteButton>
        </s.ButtonWrapper>
      </td>
    </tr>
  );

  private handlePageClick = (data: { selected: number }) => {
    this.setState({ startNum: data.selected });
  };
}

export default Table;
