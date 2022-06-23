import React, { useState } from 'react'
import { auth } from '../utils/firebase'


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string | number>("")

    const register = (e: any) => {
        e.preventDefault()

        

    }

    const signUp = () => {

    }

    const googleSignUp = () => {

    }
    return (
        <div className="mx-auto w-5/6 pt-10 pb-10 min-h-[75vh]">
            <div >
                <h1 className='text-center text-xl'>Please Login </h1>
                <div className="flex flex-col space-y-4 mt-7 w-3/6 mx-auto">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-green-600 py-2 px-4 rounded-full focus:outline-none bg-transparent" type="text" placeholder='Email Address' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)}  className="border border-green-600 py-2 px-4 rounded-full focus:outline-none bg-transparent" type="password" placeholder='Password' />
                    <button onClick={signUp} className="text-green-600 bg-white border border-green-600 py-2 px-4 rounded-full hover:bg-green-600 hover:text-white mt-9">Login</button>
                    <p className='text-center text-xs'>You don't have an account? </p>
                    <button onClick={register} className="text-white bg-green-600 border border-green-600 py-2 px-4 rounded-full hover:bg-green-700 hover:text-white">Register</button>
                    <p className='text-center text-xs'>Or</p>
                    <button onClick={googleSignUp} className="text-white bg-blue-600 border border-blue-600 py-2 px-4 rounded-full hover:bg-blue-700 hover:text-white">Continue with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login