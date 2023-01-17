import React, { FC } from 'react';

interface Props {
    errors?: any;
}

const DisplayErrorText: FC<Props> = ({ errors }) => {
    return (
        <>
            {errors?.type === 'required' && <span className="text-black italic text-xs">Champs Requis</span>}
            {errors?.type === 'email' && <span className="text-black italic text-xs">Mauvais format</span>}
            {errors?.type === 'min' && <span className="text-black italic text-xs">Trop petit</span>}
            {errors?.type === 'max' && <span className="text-black italic text-xs">Trop grand</span>}
            {errors?.type === 'oneOf' && <span className="text-black italic text-xs">Mauvais mot de passe</span>}
            {errors?.type === 'length' && <span className="text-black italic text-xs">Code incorrect</span>}
            {/* {errors?.message && errors?.message.includes(`Veuillez mettre une bonne url.`) && <span className="text-black italic text-xs">Veuillez mettre une bonne url.</span>} */}
        </>
    );
};

export default DisplayErrorText;
