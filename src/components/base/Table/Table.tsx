/* tslint:disable:jsx-no-lambda */
import React, { Component, ReactNode } from 'react';
import * as s from './Table.styled';

interface Data {
  id: string;
  [x: string]: any;
}

interface Props {
  header: string[];
  list: Data[];
  body: (x: any) => ReactNode;
  handleEdit: (e: React.FormEvent<HTMLButtonElement>, data: any) => void;
  handleDelete: (e: React.FormEvent<HTMLButtonElement>, id: string) => void;
}

class Table extends Component<Props> {
  public render() {
    const { header, list } = this.props;
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
            {list.map(this.Body)}
            <tr />
          </s.Body>
        </s.Table>
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
}

export default Table;
