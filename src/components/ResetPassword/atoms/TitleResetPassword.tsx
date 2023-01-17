import { FC } from 'react';

interface Props {
    step: 1 | 2;
}

const TitleResetPassword: FC<Props> = ({ step }) => {
    return (
        <>
            <h3 className="text-center text-lg">Changez votre mot de passe</h3>
            <h5 className="text-center text-sm">Étape {step}/2</h5>
        </>
    );
};

export default TitleResetPassword;
