import React, { useState } from 'react'
import Input from './common/Input'

const ControlledForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formValues, setFormValues] = useState(initialValues);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.table(formValues);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white">
            <div className="max-w-[1140px] px-4 mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="w-full bg-gradient-to-r from-green-100 via-emerald-100 to-green-200 rounded-xl p-6"
                >
                    <div className='flex gap-2 mb-2'>
                        <Input
                            name="firstName"
                            value={formValues.firstName}
                            onChange={changeHandler}
                            placeholder="First Name"
                            type="text"
                        />
                        <Input
                            name="lastName"
                            value={formValues.lastName}
                            onChange={changeHandler}
                            placeholder="Last Name"
                            type="text"
                        />
                    </div>
                    <Input
                        name="email"
                        value={formValues.email}
                        onChange={changeHandler}
                        placeholder="Email"
                        type="email"
                        InputClass="!mb-4 !w-full !max-w-[500px]"
                    />
                    <div className='flex gap-2 mb-2'>
                        <Input
                            name="password"
                            value={formValues.password}
                            onChange={changeHandler}
                            placeholder="Password"
                            type="password"
                        />
                        <Input
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            type="text"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-3 px-6 py-2 bg-white text-green-700 hover:border-0 border border-black rounded-full cursor-pointer 
                transition-all duration-500 ease-in-out 
                hover:bg-green-700 hover:text-white 
                hover:scale-105 hover:shadow-xl 
                hover:rounded-tl-none hover:rounded-br-3xl"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ControlledForm
