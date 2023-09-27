'use client'
import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form"
import Input from "@/components/Input";

type Inputs = {
    firstName: string
    lastName: string
    email: string
    question: string
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <div className='flex gap-28 w-full'>
            <div className='w-1/2'>
                <p className='text-4xl mb-6'>Feel free to get in touch with us! <br/></p>
                <p>We love connecting with fellow space enthusiasts and sharing our passion for astronomy. </p>
            </div>
                <form className='block w-1/2' onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder='Your first name' errors={errors} register={register} label={'First name'}
                           required inputName='firstName'/>
                    <Input placeholder='Your last name' errors={errors} register={register} label={'Last name'} required
                           inputName='lastName'/>
                    <Input placeholder='Your email' errors={errors} register={register} label={'Email'} required
                           inputName='email'/>
                    <div className='block w-full'>
                        <p>Ask your question</p>
                        <textarea
                            className='rounded-xl bg-custom border-blue-300 border-1 border w-full px-4 py-4 h-32' {...register('question',)}  />
                    </div>
                    <input className='px-10 py-2 mt-10 bg-blue-900 rounded-xl' type="submit" value='Send'/>
                </form>
        </div>
    );
};

export default Contact;