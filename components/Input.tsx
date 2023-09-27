import React from 'react';

interface IProps {
    errors: any,
    register: any
    label: string
    inputName: string
    required: boolean
    placeholder: string
}

const Input = ({errors, register, label, inputName, required, placeholder }: IProps) => {
    return (
        <div className='block mb-6'>
            <p>{label}</p>
            <input className='rounded-xl bg-custom border-blue-300 border border-1 px-7 py-3'
                   {...register(inputName, { required })}
                    placeholder={placeholder}
            />
            {errors[inputName] && <p className='text-red-600 text-sm'>This field is required</p>}
        </div>
    );
};

export default Input;