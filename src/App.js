import { Layout } from "layout";
import { Admin, Collections, Home, Login, Register } from "pages";
import { useEffect } from "react";
import { BrowserRouter as Switch,Route, useLocation } from 'react-router-dom'

function App() {

  useEffect(() => {
    const rootElement = document.getElementById('root');
    rootElement.className = "overflow-x-hidden font-body font-light text-gray-400 bg-gray-50";
  },[])

  const location = useLocation();

  return (
   <Layout>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/collectives" component={Collections} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
   </Layout>
  );
}

export default App;
 