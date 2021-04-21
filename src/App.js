import { useEffect } from "react";

function App() {

  useEffect(() => {
    const body =  document.querySelector('body');
    body.children[1].className = "overflow-x-hidden bg-red-400";
  },[])

  return (
    <div className="overflow-x-hidden">
      Hello!!
    </div>
  );
}

export default App;
