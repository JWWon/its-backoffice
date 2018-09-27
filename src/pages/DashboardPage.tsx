import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { RouteComponentProps } from 'react-router-dom';

interface Param {
  type: string;
  detail: string;
}
export interface IParams {
  params: {
    [key: string]: Param;
  };
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
const NoticeEdit = Loadable({
  loader: () => import('../containers/dashboard/NoticeEditContainer'),
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
    const { pathname } = this.props.location;
    const { params } = this.props.match;

    switch (pathname) {
      case '/main/slides':
        return <MainSlides params={params} />;
      case '/main/about':
        return <MainAbout params={params} />;
      case '/main/news':
        return <MainNews params={params} />;
      case '/client/lists':
        return <ClientList params={params} />;
      case '/client/proposals':
        return <ClientList params={params} />;
      case '/client/new':
        return <ClientEdit params={params} />;
      case '/client/edit':
        return <ClientEdit params={params} />;
      case '/notice/lists':
        return <NoticeList params={params} />;
      case '/notice/new':
        return <NoticeEdit params={params} />;
      case '/notice/edit':
        return <NoticeEdit params={params} />;
      case '/other/about':
        return <OtherAbout params={params} />;
      case '/other/footer':
        return <OtherFooter params={params} />;
      default:
        return null;
    }
  }
}

export default DashboardPage;
