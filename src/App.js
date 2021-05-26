import { Layout, AuthLayout } from 'layout';
import { Admin, Collections, Home, Login, Register, AddProduct, AdminProduct } from 'pages';
import { useEffect } from 'react';
import { BrowserRouter as Switch, Route, useLocation } from 'react-router-dom';

function App() {
    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.className = 'overflow-x-hidden font-body font-light text-gray-400 bg-gray-50';
    }, []);

    const location = useLocation();

    return (
        <Layout>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route exact path="/collectives" component={Collections} />
                <Route path="/auth/:path">
                    <AuthLayout>
                        <Switch location={location} key={location.pathname}>
                            <Route path="/auth/login" component={Login} />
                            <Route path="/auth/register" component={Register} />
                        </Switch>
                    </AuthLayout>
                </Route>
                <Route path="/admin/:path">
                    <Switch>
                        <Route path="/admin/add-product" component={AddProduct} />
                        <Route path="/admin/products" component={AdminProduct} />
                    </Switch>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
