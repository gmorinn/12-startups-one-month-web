import { FC } from 'react';
import FormCheckEmail from '../components/ResetPassword/organisms/formCheckEmail';
import TitleResetPassord from '../components/ResetPassword/atoms/TitleResetPassword';

const ForgotPassword: FC = () => {
    return (
        <div className="">
            <TitleResetPassord step={1} />
            <FormCheckEmail />
        </div>
    );
};

export default ForgotPassword;
