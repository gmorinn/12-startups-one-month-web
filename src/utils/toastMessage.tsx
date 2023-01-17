import { toast } from 'react-toastify';

export const displayError = (msg: string): React.ReactText =>
    toast.error(msg, {
        position: 'top-left',
        autoClose: 3000,
        theme: 'dark',
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

export const displaySuccess = (msg: string): React.ReactText =>
    toast.info(msg, {
        position: 'top-left',
        autoClose: 3000,
        theme: 'dark',
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
