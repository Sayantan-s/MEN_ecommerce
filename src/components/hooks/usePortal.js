import { useEffect } from 'react'
const usePortal = () => {

    useEffect(() => {
        const newRoot  = document.createElement('div');
        newRoot.className="modals"
        const rootElement = document.getElementById('root');
        document.body.insertBefore(newRoot,rootElement)
    },[])
}

export default usePortal;