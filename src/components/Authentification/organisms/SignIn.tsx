import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../../common/Button';
import { useNavigate } from 'react-router-dom';
import { ButtonType, ErrorGraphQL } from '../../../utils/types';
import InputAuth from '../molecules/InputAuth';
import { ToastContainer } from 'react-toastify';
import { SigninInput, useSigninMutation } from '../../../graphql/generated/graphql';
import { displayError, displaySuccess } from '../../../utils/toastMessage';
import Err from '../../../utils/humanResp';

const SignIn: FC = () => {
    const navigate = useNavigate();

    const [login, { loading }] = useSigninMutation({
        onCompleted: (res) => {
            console.log('res request', res);
            // setAccessToken(res.signin.access_token);
            // setRefreshToken(res.signin.refresh_token);
            // setUser(getUser(res.signin.access_token));
            displaySuccess('Vous êtes connecté!');
            // navigate('/');
        },
        onError: (error: ErrorGraphQL) => {
            displayError(Err(error?.message));
        },
    });

    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(9),
    });

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<SigninInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<SigninInput> = async ({ email, password }: SigninInput): Promise<any> => {
        await login({
            variables: {
                input: {
                    email,
                    password,
                },
            },
        });
    };

    return (
        /* eslint-disable @typescript-eslint/no-misused-promises */
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputAuth
                register={register('email')}
                errors={errors.email}
                type="email"
                placeholder="Email"
                className="my-4 block border-2"
            />
            <InputAuth
                register={register('password')}
                errors={errors.password}
                type="password"
                placeholder="Mot de passe"
                className="my-4 block border-2"
            />
            <Button
                type={ButtonType.SUBMIT}
                disabled={loading}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-4 py-2 mt-3">
                Valider
            </Button>
            <small onClick={() => navigate('/check-email')} className="italic cursor-pointer underline mt-5 block">
                Mot de passe oublié !
            </small>
            <ToastContainer />
        </form>
    );
};

export default SignIn;
