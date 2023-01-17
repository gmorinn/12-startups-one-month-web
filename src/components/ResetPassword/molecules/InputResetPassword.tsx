import React, { FC } from 'react';
import DisplayErrorText from '../../../common/displayError';
import { TypeInput } from '../../../utils/types';

interface Props {
    register: any;
    errors: any;
    type: TypeInput;
    className?: string;
    placeholder: string;
    defaultValue?: string;
}

const InputResetPassword: FC<Props> = ({ register, type, placeholder, className, errors, defaultValue }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                {...register}
                className={className}
                defaultValue={defaultValue}
            />
            <DisplayErrorText errors={errors} />
        </div>
    );
};

export default InputResetPassword;
