import { FC } from 'react';
import SignIn from '../components/Authentification/organisms/SignIn';
import SignUp from '../components/Authentification/organisms/SignUp';

const Homepage: FC = () => {
    return (
        <div className="">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Homepage;
