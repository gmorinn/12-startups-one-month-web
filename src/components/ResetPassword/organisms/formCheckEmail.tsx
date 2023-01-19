import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputResetPassword from '../molecules/InputResetPassword';
import Button from '../../../common/Button';
import { ButtonType, ErrorGraphQL } from '../../../utils/types';
import { useNavigate } from 'react-router-dom';
import { displayError } from '../../../utils/toastMessage';
import Err from '../../../utils/humanResp';
import { useSendCodeMutation } from '../../../graphql/generated/graphql';

interface FormValues {
    email: string;
}

const FormCheckEmail: FC = () => {
    const navigate = useNavigate();

    const [lost, { loading }] = useSendCodeMutation({
        onCompleted: (res) => {
            if (res?.lost.success) {
                localStorage.setItem('email', res?.lost.email);
                navigate('/forgot-password');
            } else displayError('Email non trouvé');
        },
        onError: (error: ErrorGraphQL) => {
            displayError(Err(error?.message));
        },
    });

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
        await lost({
            variables: {
                input: email,
            },
        });
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
                disabled={loading}>
                {loading ? 'Chargement...' : 'Envoyer'}
            </Button>
        </form>
    );
};

export default FormCheckEmail;
