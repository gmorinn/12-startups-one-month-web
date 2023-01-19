import { FC } from 'react';
import SignIn from '../components/Authentification/organisms/SignIn';
import SignUp from '../components/Authentification/organisms/SignUp';

const Login: FC = () => {
    return (
        <div className="">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Login;
