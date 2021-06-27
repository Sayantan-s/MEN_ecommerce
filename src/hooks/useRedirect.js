import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const useRedirect = ({ redirectTo }) => {
    const [{ state, to }, setRedirect] = useState({
        state: false,
        to: null
    });

    const onRedirectHandler = (_) =>
        setRedirect((prev) => ({
            ...prev,
            state: true,
            to: redirectTo
        }));

    const Redirector = ({ children }) => <>{state && <Redirect to={to}>{children}</Redirect>}</>;
};

export default useRedirect;
