import React, { FC } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import useRouter from '../../../hooks/useRouter';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputResetPassword from '../molecules/InputResetPassword';
import Button from '../../../common/Button';
import { ButtonType, ResultSendCodeConfirmation } from '../../../utils/types';

interface FormValues {
    email: string;
}

const FormCheckEmail: FC = () => {
    const router = useRouter();
    const { checkMailAndSendCode, load } = useAuth();

    const schema = yup
        .object({
            email: yup.string().email().required(),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = async ({ email }: FormValues): Promise<any> => {
        await checkMailAndSendCode(email)
            .then((res: ResultSendCodeConfirmation) => {
                if (res?.success) {
                    localStorage.setItem('email', email);
                    router.push('/forgot-password');
                } else console.error(res);
            })
    };

    return (
        /* eslint-disable @typescript-eslint/no-misused-promises */

        <form onSubmit={handleSubmit(onSubmit)}>
            <InputResetPassword
                register={register('email')}
                errors={errors.email}
                type="email"
                placeholder="Email"
                className="border-2"
            />
            <Button
                type={ButtonType.SUBMIT}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-3"
                disabled={load}>
                {load === true ? 'Chargement...' : 'Envoyer'}
            </Button>
        </form>
    );
};

export default FormCheckEmail;
