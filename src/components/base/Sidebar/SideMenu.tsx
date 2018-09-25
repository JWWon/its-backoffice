import React from 'react';
import * as s from './SideMenu.styled';

interface IMenuItem {
  pageName: string;
  onClick: () => void;
}

export interface IProps {
  label: string;
  items?: IMenuItem[];
}

const SideMenuItem: React.SFC<IMenuItem> = ({ pageName, onClick }) => (
  <s.ItemWrapper onClick={onClick}>
    <s.Item>{pageName}</s.Item>
  </s.ItemWrapper>
);

const SideMenu: React.SFC<IProps> = ({ label, items }) => (
  <s.Container>
    <s.LabelWrapper>
      <s.Label>{label}</s.Label>
      {/* TODO: dropdown icon */}
    </s.LabelWrapper>
    {items &&
      items.map(item => (
        <SideMenuItem
          pageName={item.pageName}
          onClick={item.onClick}
          key={item.pageName}
        />
      ))}
  </s.Container>
);

export default SideMenu;
