import jwtDecode, { JwtPayload } from 'jwt-decode';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { EmptyString } from '../utils/checkValue';
import { ResetPasswordProps, ResultJWT, ResultSendCodeConfirmation, SignupProps, SuccessResult } from '../utils/types';

const authContext = createContext<any | null>(null);
const api: string = EmptyString(process.env.REACT_APP_API_URL);

interface ProvideAuthProps {
    children: React.ReactNode;
}

export const ProvideAuth = ({ children }: ProvideAuthProps): JSX.Element => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = (): any => {
    return useContext(authContext);
};

const setAccessToken = (token: string): void => {
    token !== '' && localStorage.setItem('accessToken', token);
};

const setRefreshToken = (token: string): void => {
    token !== '' && localStorage.setItem('refreshToken', token);
};

const setOAuthToken = (oAuth: string): void => sessionStorage.setItem('oAuth', oAuth);

const getAccessToken = (): string => localStorage.getItem('accessToken') ?? '';

const getRefreshToken = (): string => localStorage.getItem('refreshToken') ?? '';

const getOAuthToken = (): string => sessionStorage.getItem('oAuth') ?? '';

const getUser = (jwt?: string): any | null => {
    const token: string = jwt ?? getAccessToken();
    const user = token !== '' ? jwtDecode<JwtPayload>(token) : null;
    return user;
};

const isTokenExpired = (token: string): Boolean => {
    try {
        const decoded = jwtDecode<JwtPayload>(token);
        if (decoded?.exp !== undefined && decoded.exp < Date.now() / 1000) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        localStorage.removeItem('refreshToken');
        sessionStorage.removeItem('accessToken');
        return false;
    }
};

const loggedIn = (): Boolean => {
    const token = getAccessToken();
    if (token !== '' && isTokenExpired(token) === false) {
        return true;
    }
    return false;
};

function useProvideAuth(): any {
    const [user, setUser] = useState<any | null>(null);
    const [load, setLoad] = useState<Boolean>(false);

    const [oAuth, setOAuth] = useState<String | null>(null);

    const getAuthorization = async (): Promise<any> => {
        setLoad(true);

        const formData = new FormData();

        const clientId: string = EmptyString(process.env.REACT_APP_CLIENT_ID);
        const clientSecret: string = EmptyString(process.env.REACT_APP_CLIENT_SECRET);

        formData.append('grant_type', 'client_credentials');
        formData.append('client_id', clientId);
        formData.append('client_secret', clientSecret);

        const response = await fetch(`${api}/authorization`, {
            method: 'POST',
            body: formData,
        });

        const body = await response.json();
        setOAuth(body.access_token);
        setOAuthToken(body.access_token);
        setLoad(false);
        return body.access_token;
    };

    useEffect(() => {
        oAuth == null && getAuthorization();
        return () => {
            getOAuthToken();
        };
    }, [oAuth]);

    const refreshToken = async (reftoken?: string): Promise<ResultJWT> => {
        let rToken: string = '';

        if (reftoken === undefined) {
            const token = getRefreshToken();
            if (token === '') {
                logout();
                return { access_token: '', refresh_token: '' };
            }
            rToken = token;
        }

        setLoad(true);
        return await fetch(`${api}/refresh`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getOAuthToken()}`,
            },
            method: 'POST',
            body: JSON.stringify({
                refresh_token: rToken,
            }),
        })
            .then(async (resp) => {
                if (resp.status === 403) {
                    return await getAuthorization().then(async () => await refreshToken(rToken));
                }
                return await resp.json();
            })
            .then((body) => {
                setLoad(false);
                setAccessToken(body.access_token);
                setRefreshToken(body.refresh_token);
                setUser(getUser(body.access_token));
                return body;
            });
    };

    const signup = async (reqBody: SignupProps): Promise<ResultJWT> => {
        setLoad(true);
        return await fetch(`${api}/v1/signup`, {
            headers: {
                Authorization: `Bearer ${getOAuthToken()}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                ...reqBody,
            }),
        })
            .then(async (resp) => {
                if (resp.status === 403) {
                    await getAuthorization().then(async () => await signup(reqBody));
                }
                return await resp.json();
            })
            .then((body) => {
                setLoad(false);
                setAccessToken(body.access_token);
                setRefreshToken(body.refresh_token);
                setUser(getUser(body.access_token));
                return body;
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    };

    const logout = (): void => {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        setUser(() => null);
    };

    const checkMailAndSendCode = async (data: string): Promise<ResultSendCodeConfirmation> => {
        setLoad(true);
        return await fetch(`${api}/v1/password/lost`, {
            headers: {
                Authorization: `Bearer ${getOAuthToken()}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                email: data,
            }),
        })
            .then(async (resp) => {
                if (resp.status === 403) {
                    await getAuthorization().then(async () => await checkMailAndSendCode(data));
                }
                return await resp.json();
            })
            .then((body) => {
                setLoad(false);
                return body;
            });
    };

    const newPassword = async (password: string, confirm: string, id: string): Promise<SuccessResult> => {
        setLoad(true);
        const requestHeaders: any = new Headers();
        requestHeaders.set('Authorization', `Bearer ${getOAuthToken()}`);
        requestHeaders.set('jwtToken', getAccessToken());
        requestHeaders.set('Content-Type', 'application/json');

        return await fetch(`${api}/v1/bo/user/change/password/${id}`, {
            headers: requestHeaders,
            method: 'PATCH',
            body: JSON.stringify({
                password,
                confirm,
            }),
        })
            .then(async (resp) => {
                if (resp.status === 403) {
                    await getAuthorization().then(async () => await newPassword(password, confirm, id));
                }
                return await resp.json();
            })
            .then((body) => {
                setLoad(false);
                return body;
            });
    };

    const resetPassword = async ({
        email,
        password,
        code,
        confirm_password,
    }: ResetPasswordProps): Promise<SuccessResult> => {
        setLoad(true);
        return await fetch(`${api}/v1/password/reset`, {
            headers: {
                Authorization: `Bearer ${getOAuthToken()}`,
                'Content-Type': 'application/json',
            },
            method: 'PATCH',
            body: JSON.stringify({
                email,
                password,
                code,
                confirm_password,
            }),
        })
            .then(async (resp) => {
                if (resp.status === 403) {
                    await getAuthorization().then(
                        async () => await resetPassword({ email, password, code, confirm_password }),
                    );
                }
                return await resp.json();
            })
            .then((body) => {
                setLoad(false);
                return body;
            });
    };

    useEffect(() => {
        if (loggedIn() === true) {
            setUser(getUser());
        } else {
            refreshToken().catch((err) => console.error(err));
        }
        // eslint-disable-next-line
    }, []);

    // Return the user object and auth methods
    return {
        getAuthorization,
        getOAuthToken,
        getAccessToken,
        loggedIn,
        refreshToken,
        load,
        user,
        signup,
        getUser,
        logout,
        resetPassword,
        checkMailAndSendCode,
        newPassword,
    };
}
