import { FC } from 'react';
import ResetPassword from '../components/ResetPassword/organisms/ResetPassword';
import TitleResetPassord from '../components/ResetPassword/atoms/TitleResetPassword';

const ForgotPassword: FC = () => {
    return (
        <div className="">
            <TitleResetPassord step={2} />
            <ResetPassword />
        </div>
    );
};

export default ForgotPassword;
