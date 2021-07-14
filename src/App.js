import { AnimatedRoutes } from 'animations';
import { Layout, AuthLayout } from 'layout';
import { Collections, Home, Login, Register, AddProduct, AdminProduct, Product, Shipping, Payment } from 'pages';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { IS_AUTHENTICATED } from 'store/actions/Auth.actions';
import { USER_IS_AUTHENTICATED } from 'store/types/isAuthenticated';
import { PrivateRoute } from 'components';
import http from 'utils/http';

function App() {
    const { data, isAuthenticated } = useSelector((state) => state.AuthReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.className = 'overflow-x-hidden font-body font-light text-gray-400 bg-gray-50';
    }, []);

    const userIsAuthenticated = () => {
        if (!data || !data.accessToken || !data.expiry) return false;
        return new Date().getTime() / 1000 < data.expiry;
    };

    useEffect(() => {
        dispatch(IS_AUTHENTICATED(USER_IS_AUTHENTICATED, { data, userIsAuthenticated }));
        (async() => {
            //const res = await http.get('/utilities/csrf');
            //console.log(res)
        })()
    }, []);

    return (
        <Layout>
            <AnimatedRoutes>
                <Route exact path="/" component={Home} />
                <Route exact path="/collectives" component={Collections} />
                <Route path="/collectives/product/:id" component={Product} /> 
                <Route path="/shipping" component={Shipping} />
                <Route path="/payment" component={Payment} />
                <PrivateRoute path="/auth/:path" condition={!isAuthenticated} redirect="/">
                    <AuthLayout>
                        <Switch>
                            <Route path="/auth/login" component={Login} />
                            <Route path="/auth/register" component={Register} />
                        </Switch>
                    </AuthLayout>
                </PrivateRoute>
                <PrivateRoute path="/admin/:path" redirect="/" path="/admin/:path">
                    <Switch>
                        <Route path="/admin/add-product" component={AddProduct} />
                        <Route path="/admin/products" component={AdminProduct} />
                    </Switch>
                </PrivateRoute>
            </AnimatedRoutes>
        </Layout>
    );
}

export default App;
