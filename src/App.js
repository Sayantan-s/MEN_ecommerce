import { Layout, AuthLayout } from 'layout';
import { Collections, Home, Login, Register, AddProduct, AdminProduct, Product } from 'pages';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.className = 'overflow-x-hidden font-body font-light text-gray-400 bg-gray-50';
    }, []);

    console.log(process.env)
    
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/collectives" component={Collections} />
                <Route path="/collectives/product/:id" component={Product} />
                <Route path="/auth/:path">
                    <AuthLayout>
                        <Switch>
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
