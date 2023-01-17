import React, { FC } from 'react';
import DisplayErrorText from '../../../common/displayError';
import { TypeInput } from '../../../utils/types';

interface Props {
    register: any;
    errors: any;
    type: TypeInput;
    className?: string;
    placeholder: string;
}

const InputAuth: FC<Props> = ({ register, type, placeholder, className, errors }) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} {...register} className={className} />
            <DisplayErrorText errors={errors} />
        </div>
    );
};

export default InputAuth;
