import { Layout } from "layout";
import { Admin, Collections, Home } from "pages";
import { useEffect } from "react";
import { BrowserRouter as Switch,Route } from 'react-router-dom'

function App() {

  useEffect(() => {
    const rootElement = document.getElementById('root');
    rootElement.className = "overflow-x-hidden font-body font-normal text-gray-400";
  },[])

  return (
   <Layout>
      <Switch>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/collections">
            <Collections />
        </Route>
        <Route path="/admin">
            <Admin />
        </Route>
      </Switch>
   </Layout>
  );
}

export default App;
 