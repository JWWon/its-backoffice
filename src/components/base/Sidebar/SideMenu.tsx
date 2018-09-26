import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as s from './SideMenu.styled';

interface IMenuItem {
  pageName: string;
  link: string;
}

export interface IProps {
  label: string;
  items?: IMenuItem[];
}
interface InnerProps extends RouteComponentProps<any>, IProps {}

const SideMenuItem: React.SFC<IMenuItem> = ({ pageName, link }) => (
  <s.ItemWrapper to={link}>{pageName}</s.ItemWrapper>
);

const SideMenu: React.SFC<InnerProps> = ({ label, items }) => (
  <s.Container>
    <s.LabelWrapper>
      <s.Label>{label}</s.Label>
      {/* TODO: dropdown icon */}
    </s.LabelWrapper>
    {items &&
      items.map(item => (
        <SideMenuItem
          pageName={item.pageName}
          link={item.link}
          key={item.pageName}
        />
      ))}
  </s.Container>
);

export default withRouter(SideMenu);
