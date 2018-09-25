import React from 'react';
import * as s from './Sidebar.styled';
import SideMenu, { IProps as MenuProps } from './SideMenu';

interface IProps {
  menuList: MenuProps[];
}

class Sidebar extends React.Component<IProps> {
  public render() {
    const { menuList } = this.props;
    return (
      <s.Container>
        {menuList.map(menu => (
          <SideMenu label={menu.label} items={menu.items} key={menu.label} />
        ))}
      </s.Container>
    );
  }
}

export default Sidebar;
