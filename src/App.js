import { Layout } from "layout";
import { Admin, Collections, Home, Login, Register } from "pages";
import { useEffect } from "react";
import { BrowserRouter as Switch,Route } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'

function App() {

  useEffect(() => {
    const rootElement = document.getElementById('root');
    rootElement.className = "overflow-x-hidden font-body font-normal text-gray-400 bg-gray-50";
  },[])

  useEffect(() => {
    let root =  document.querySelector('#root');
    root.setAttribute('data-scroll-container','')
    new LocomotiveScroll({
      el : root,
      smooth : true,
    })
  },[])

  return (
   <Layout>
      <Switch>
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
 