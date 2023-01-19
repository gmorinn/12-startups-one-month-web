import React, { FC, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { displayError, displaySuccess } from '../../../utils/toastMessage';
import InputResetPassword from '../molecules/InputResetPassword';
import Button from '../../../common/Button';
import { ButtonType, ErrorGraphQL } from '../../../utils/types';
import { UndefinedString } from '../../../utils/checkValue';
import { useNavigate } from 'react-router-dom';
import Err from '../../../utils/humanResp';
import { useResetPasswordMutation } from '../../../graphql/generated/graphql';

interface FormValues {
    email: string;
    password: string;
    code: string;
    confirm_password: string;
}

const FormCheckEmail: FC = () => {
    const email = localStorage.getItem('email');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const [resetPassword, { loading }] = useResetPasswordMutation({
        onCompleted: (res) => {
            if (res?.resetPassword) {
                displaySuccess('Mot de passe changé!');
                localStorage.removeItem('email');
                navigate('/login');
            } else displayError('Email non trouvé');
        },
        onError: (error: ErrorGraphQL) => {
            displayError(Err(error?.message));
        },
    });

    const schema = yup
        .object({
            password: yup.string().required().min(9),
            email: yup.string().email().required(),
            code: yup.string().required().length(5),
            confirm_password: yup
                .string()
                .required()
                .min(9)
                .oneOf([yup.ref('password'), null], 'Password is different.'),
        })
        .required();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (res: FormValues): Promise<any> => {
        setError('');
        await resetPassword({
            variables: {
                input: {
                    email: res.email,
                    password: res.password,
                    confirm_password: res.confirm_password,
                    code: res.code,
                },
            },
        });
    };

    return (
        /* eslint-disable @typescript-eslint/no-misused-promises */
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <InputResetPassword
                register={register('email')}
                errors={errors.email}
                type="email"
                placeholder="Email"
                className=""
                defaultValue={UndefinedString(email)}
            />
            <InputResetPassword
                register={register('code')}
                errors={errors.code}
                type="text"
                placeholder="Code"
                className=""
            />
            <InputResetPassword
                register={register('password')}
                errors={errors.password}
                type="password"
                placeholder="Nouveau mot de passe"
                className=""
            />
            <InputResetPassword
                register={register('confirm_password')}
                errors={errors.confirm_password}
                type="password"
                placeholder="Nouveau mot de passe"
                className=""
            />
            {error !== '' && <span className="text-black flex justify-center my-2 text-xs">{error}</span>}
            <Button
                type={ButtonType.SUBMIT}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-3"
                disabled={loading}>
                {loading ? 'Chargement...' : 'Changer le mot de passe'}
            </Button>
        </form>
    );
};

export default FormCheckEmail;
