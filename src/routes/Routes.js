import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

import { isUserAuthenticated } from '../helpers/authUtils';
import * as layoutConstants from '../constants/layout';
import { allFlattenRoutes as routes } from './index';

// Lazy loading and code splitting -
// Derieved idea from https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const loading = () => <div></div>;

// All layouts/containers
const AuthLayout = Loadable({
    loader: () => import('../layouts/Auth'),
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
    },
    loading,
});

const VerticalLayout = Loadable({
    loader: () => import('../layouts/Vertical'),
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
    },
    loading,
});

const HorizontalLayout = Loadable({
    loader: () => import('../layouts/Horizontal'),
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
    },
    loading,
});

const SingleReservation = React.lazy(() => import('../pages/reservations/single'));
const SingleLocation = React.lazy(() => import('../pages/locations/single'));

class Routes extends Component {
    // returns the layout
    getLayout = () => {
        if (!isUserAuthenticated()) return AuthLayout;

        let layoutCls = VerticalLayout;

        switch (this.props.layout.layoutType) {
            case layoutConstants.LAYOUT_HORIZONTAL:
                layoutCls = HorizontalLayout;
                break;
            default:
                layoutCls = VerticalLayout;
                break;
        }
        return layoutCls;
    };

    render() {
        const Layout = this.getLayout();

        // rendering the router with layout
        return (
            <BrowserRouter>
                <Layout {...this.props}>
                    <Switch>
                        {routes.map((route, index) => {
                            return !route.children ? (
                                <route.route
                                    key={index}
                                    path={route.path}
                                    roles={route.roles}
                                    exact={route.exact}
                                    component={route.component}></route.route>
                            ) : null;
                        })}
                        <Route path="/reservations/view-reservation" route={Route} children={<SingleReservation />}/>
                        <Route path="/view-location" route={Route} children={<SingleLocation />}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        layout: state.Layout,
        user: state.Auth.user,
    };
};

export default connect(mapStateToProps, null)(Routes);
