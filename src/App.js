import { Layout } from "layout";
import { Dashboard, Home } from "pages";
import { useEffect } from "react";
import { BrowserRouter as Switch,Route } from 'react-router-dom'

function App() {

  useEffect(() => {
    const body =  document.querySelector('body');
    body.children[1].className = "overflow-x-hidden bg-red-400 font-body font-normal";
  },[])

  return (
   <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
   </Layout>
  );
}

export default App;
