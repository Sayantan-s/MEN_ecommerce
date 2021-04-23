import { Layout } from "layout";
import { Admin, Collections, Home } from "pages";
import { useEffect } from "react";
import { BrowserRouter as Switch,Route } from 'react-router-dom'

function App() {

  useEffect(() => {
    const rootElement = document.getElementById('root');
    rootElement.className = "overflow-x-hidden font-body font-normal";
  },[])

  return (
   <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/collections" component={Collections}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
   </Layout>
  );
}

export default App;
 