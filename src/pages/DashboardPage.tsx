import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { RouteComponentProps } from 'react-router-dom';

export interface ISerach {
  search?: Array<{ [x: string]: string }> | null;
}

const Loading = () => <div>loading...</div>;

const ClientEdit = Loadable({
  loader: () => import('../containers/dashboard/ClientEditContainer'),
  loading: Loading,
});
const ClientList = Loadable({
  loader: () => import('../containers/dashboard/ClientListContainer'),
  loading: Loading,
});
const MainAbout = Loadable({
  loader: () => import('../containers/dashboard/MainAboutContainer'),
  loading: Loading,
});
const MainNews = Loadable({
  loader: () => import('../containers/dashboard/MainNewsContainer'),
  loading: Loading,
});
const MainSlides = Loadable({
  loader: () => import('../containers/dashboard/MainSlidesContainer'),
  loading: Loading,
});
const NoticeList = Loadable({
  loader: () => import('../containers/dashboard/NoticeListContainer'),
  loading: Loading,
});
const OtherAbout = Loadable({
  loader: () => import('../containers/dashboard/OtherAboutContainer'),
  loading: Loading,
});
const OtherFooter = Loadable({
  loader: () => import('../containers/dashboard/OtherFooterContainer'),
  loading: Loading,
});

class DashboardPage extends Component<RouteComponentProps> {
  public render() {
    const { pathname, search } = this.props.location;
    const splitSearch = this.splitSearch(search);

    switch (pathname) {
      case '/main/slides':
        return <MainSlides search={splitSearch} />;
      case '/main/about':
        return <MainAbout search={splitSearch} />;
      case '/main/news':
        return <MainNews search={splitSearch} />;
      case '/client/list':
        return <ClientList search={splitSearch} />;
      case '/client/edit':
        return <ClientEdit search={splitSearch} />;
      case '/notice/list':
        return <NoticeList search={splitSearch} />;
      case '/other/about':
        return <OtherAbout search={splitSearch} />;
      case '/other/footer':
        return <OtherFooter search={splitSearch} />;
      default:
        return null;
    }
  }

  private splitSearch(search: string) {
    if (search === '') {
      return null;
    }

    const r = search.replace(/[?](\w+)/, '$1');
    const list = r.split('&');
    let objects: Array<{ [x: string]: string }> = [];

    for (const item of list) {
      const obj = item.split('=');
      objects = [...objects, { [obj[1]]: obj[2] }];
    }
    return objects;
  }
}

export default DashboardPage;
