import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { RouteComponentProps } from 'react-router-dom';

import Spinner from 'components/common/Spinner';

export interface Param {
  type: 'main' | 'clinic' | 'notice' | 'other';
  detail: string;
}
export interface IParams {
  params: {
    [key: string]: Param;
  };
}

const ClinicList = Loadable({
  loader: () => import('containers/dashboard/ClinicListContainer'),
  loading: Spinner,
});
const RegisterList = Loadable({
  loader: () => import('containers/dashboard/ClinicRegistrationContainer'),
  loading: Spinner,
});
const MainNews = Loadable({
  loader: () => import('../containers/dashboard/MainNewsContainer'),
  loading: Spinner,
});
const MainSlides = Loadable({
  loader: () => import('../containers/dashboard/MainSlidesContainer'),
  loading: Spinner,
});
const AnnouncementList = Loadable({
  loader: () => import('../containers/dashboard/AnnouncementListContainer'),
  loading: Spinner,
});
const About = Loadable({
  loader: () => import('../containers/dashboard/AboutContainer'),
  loading: Spinner,
});
const Footer = Loadable({
  loader: () => import('../containers/dashboard/FooterContainer'),
  loading: Spinner,
});

class DashboardPage extends Component<RouteComponentProps> {
  public render() {
    const { location, match } = this.props;
    switch (location.pathname) {
      case '/main/slides':
        return <MainSlides params={match.params} />;
      case '/main/news':
        return <MainNews params={match.params} />;
      case '/clinic/lists':
        return <ClinicList params={match.params} />;
      case '/clinic/registrations':
        return <RegisterList params={match.params} />;
      case '/announcement/lists':
        return <AnnouncementList params={match.params} />;
      case '/other/about':
        return <About params={match.params} />;
      case '/other/footer':
        return <Footer params={match.params} />;
      default:
        return null;
    }
  }
}

export default DashboardPage;
