import { useEffect } from 'react'
const usePortal = (rootname) => {

    useEffect(() => {
       if(!document.getElementById(rootname)){
            const newRoot  = document.createElement('div');
            newRoot.id= rootname;
            const rootElement = document.getElementById('root');
            document.body.insertBefore(newRoot,rootElement)
       }
    },[rootname])
}

export default usePortal;