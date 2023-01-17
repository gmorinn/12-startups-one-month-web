import React, { FC, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import useRouter from '../../../hooks/useRouter';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { displaySuccess } from '../../../utils/toastMessage';
import InputResetPassword from '../molecules/InputResetPassword';
import Button from '../../../common/Button';
import { ButtonType, SuccessResult } from '../../../utils/types';
import { UndefinedString } from '../../../utils/checkValue';

interface FormValues {
    email: string;
    password: string;
    code: string;
    confirm_password: string;
}

const FormCheckEmail: FC = () => {
    const router = useRouter();
    const email = localStorage.getItem('email');
    const { resetPassword, load } = useAuth();
    const [error, setError] = useState<string>('');

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
        await resetPassword(res).then((res: SuccessResult) => {
            if (res?.success) {
                displaySuccess('Mot de passe changé!');
                localStorage.removeItem('email');
                router.push('/');
            } else console.error(res);
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
                disabled={load}>
                {load === true ? 'Chargement...' : 'Changer le mot de passe'}
            </Button>
        </form>
    );
};

export default FormCheckEmail;
