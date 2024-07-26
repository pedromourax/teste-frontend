"use client"

import handleLogin from "@/app/login/login";
import Header from "@/components/header";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/16/solid";
import Head from "next/head";
import { useFormState } from "react-dom";
    

export default function login() {
    const [error, formAction] = useFormState(handleLogin, undefined)

    return (
        <div className="h-dvh flex flex-col items-center justify-center p-6 sm:px-6 lg:px-8">
        {/* <Head>
            <title>Home</title>
        </Head> */}
        <div className="flex flex-col justify-center items-center">
            

            <div className="flex items-center gap-2 text-xl font-extrabold p-6"> Login <ArrowLeftEndOnRectangleIcon className=" size-8 text-white"></ArrowLeftEndOnRectangleIcon></div>
            
            <form className="flex flex-col gap-1 w-full" action={formAction}>

                <input type="text" placeholder="usuario"
                name="usuario"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-0 border-collapse bg-zinc-900 
                placeholder-gray-500 text-white rounded-t-md focus:outline-none sm:text-sm"
                />

                <input type="password" placeholder="senha"
                name="senha"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-0 bg-zinc-900 
                placeholder-gray-500 text-white rounded-b-md focus:outline-none sm:text-sm"
                />

                <br/>

                <button type="submit"
                className="flex items-center justify-center w-full yellow text-black font-bold p-2 rounded-md hover:bg-orange-400 transition-all"
                > Entrar 
                </button>
            </form>
        </div>

        <div>
            &#8203;{error && <p className="font-bold text-red-900"> { error }</p>}
        </div>
    </div>
            
                
    )
}