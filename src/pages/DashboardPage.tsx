import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { RouteComponentProps } from 'react-router-dom';
// import { Route } from 'react-router-dom';

export interface Param {
  type: 'main' | 'clinic' | 'notice' | 'other';
  detail: string;
}
export interface IParams {
  params: {
    [key: string]: Param;
  };
}

const Loading = () => <div>loading...</div>;

const ClinicList = Loadable({
  loader: () => import('containers/dashboard/ClinicListContainer'),
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
    const { location, match } = this.props;
    switch (location.pathname) {
      case '/main/slides':
        return <MainSlides params={match.params} />;
      case '/main/about':
        return <MainAbout params={match.params} />;
      case '/main/news':
        return <MainNews params={match.params} />;
      case '/clinic/lists':
      case '/clinic/proposals':
        return <ClinicList params={match.params} />;
      case '/notice/lists':
        return <NoticeList params={match.params} />;
      case '/other/about':
        return <OtherAbout params={match.params} />;
      case '/other/footer':
        return <OtherFooter params={match.params} />;
      default:
        return null;
    }
  }
}

export default DashboardPage;
