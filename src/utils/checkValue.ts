export const NullString = (name:string | null | undefined):string | null => {
    return (name !== null && name !== undefined) ? name : null
};

export const EmptyString = (name:string | null | undefined) :string => {
    return (name !== null && name !== undefined) ? name : ""
};

export const UndefinedString = (name:string | null | undefined):string | undefined => {
    return (name !== null && name !== undefined) ? name : undefined
};

export const CheckBoolean = (value:boolean | undefined):boolean => {
    return value !== undefined ? value : false
};

export const ReplaceEmptyString = (name:string | null | undefined, value:string) :string => {
    return (name !== null && name !== undefined) ? name : value
};

export const CheckArray = (value:any[] | undefined):boolean => {
    return (value && value?.length > 0) ? true : false
};
