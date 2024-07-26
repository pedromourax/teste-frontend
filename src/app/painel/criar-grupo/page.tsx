"use client"

import { useFormState } from "react-dom"
import handleSubmit from "./criar-grupo"
import Link from "next/link"


export default function CriarGrupo (){

    const [error, formAction] = useFormState(handleSubmit, undefined)

    return (
        <div className="h-dvh flex items-center justify-center flex-col gap-4">
            <Link href={'/painel'} className="absolute top-8 left-8 z-50 bg-slate-800 rounded-md p-2"> Cancelar </Link>
            <form action={formAction}>
                <input type="text" placeholder="Nome do Grupo"
                    name="nome"
                    className="appearance-none relative block w-80 px-3 py-2 border-0 bg-zinc-900 
                    placeholder-gray-500 text-white rounded-md focus:outline-none sm:text-sm"
                />

                <button type="submit" className="mt-3 w-80 border-2 border-white p-2 hover:bg-white hover:text-black font-bold transition-all">
                CRIAR GRUPO
                </button>
            </form>

            <div className="w-80 text-wrap">
            &#8203;{error && <p className="font-bold text-red-900"> {error.message} </p>}
            </div>
        </div>
    )
}