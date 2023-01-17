import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../../common/Button';
import { displayError, displaySuccess } from '../../../utils/toastMessage';
import { ButtonType, ErrorGraphQL, SignupProps } from '../../../utils/types';
import InputAuth from '../molecules/InputAuth';
import { useSignupMutation } from '../../../graphql/generated/graphql';
import Err from '../../../utils/humanResp';

const SignUp: FC = () => {
    const [signup, { loading }] = useSignupMutation({
        onCompleted: (res) => {
            console.log('res request', res);
            // setAccessToken(res.signup.access_token);
            // setRefreshToken(res.signup.refresh_token);
            // setUser(getUser(res.signup.access_token));
            displaySuccess('Vous êtes connecté!');
        },
        onError: (error: ErrorGraphQL) => {
            displayError(Err(error?.message));
        },
    });
    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(9),
        confirm_password: yup
            .string()
            .required()
            .min(9)
            .oneOf([yup.ref('password'), null]),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupProps>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<SignupProps> = async ({
        email,
        password,
        confirm_password,
    }: SignupProps): Promise<any> => {
        await signup({
            variables: {
                input: {
                    email,
                    password,
                    confirm_password,
                },
            },
        });
    };

    return (
        /* eslint-disable @typescript-eslint/no-misused-promises */
        <form onSubmit={handleSubmit(onSubmit)} className="mt-24">
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
            <InputAuth
                register={register('confirm_password')}
                errors={errors.confirm_password}
                type="password"
                placeholder="Confirmer le mot de passe"
                className="my-4 block border-2"
            />
            <Button
                type={ButtonType.SUBMIT}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
                Valider
            </Button>
        </form>
    );
};

export default SignUp;
