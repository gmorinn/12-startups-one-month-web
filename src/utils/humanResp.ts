const Err = (msg: string): string => {
    const errors: any = {
        'no rows in result set': 'Email ou mot de passe incorrect.',
        'unique_violation': 'Une info entré est déjà utilisée.',
        'BAD_ROLE': 'Vous n\'êtes pas autorisé à faire ça.',
        'check constraint "firstnamechk"': 'Erreur sur le prénom.',
        'check constraint "lastnamechk"': 'Erreur sur le nom de famille.',
        'email already exist': 'L\'email existe déjà.',
        'PAYLOAD_NULL': 'Veuillez remplir les champs.',
        'EMAIL_ALREADY_EXIST': 'L\'email existe déjà.',
        'USERNAME_ALREADY_EXIST': 'Le nom d\'utilisateur est déjà pris.',
        'must contain at least one number': 'Le mot de passe doit contenir au moins un chiffre.',
    };
    
    if (msg !== null && msg !== undefined) {
        for (const key in errors) {
            if (msg.includes(key)) {
                return errors[key];
            }
        }
    }
    return 'Une erreur est survenue.';
};

export default Err;
