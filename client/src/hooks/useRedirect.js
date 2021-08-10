import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const useRedirect = ({ redirectTo }) => {
    const [state, setRedirect] = useState(false);

    const onRedirectHandler = (_) => setRedirect(true);

    const Redirector = ({ children }) => (
        <>
            {state && <Redirect to={redirectTo} />}
            {children}
        </>
    );

    return [Redirector, onRedirectHandler];
};

export default useRedirect;
