
import { ChangeEventHandler, useEffect, useState } from "react"
import { cookies } from "next/headers"
import { environment } from "@/app/enviroment"
import Link from "next/link"
import UploadFile from "@/components/upload"

export default async function groupoDetail( { params } ){
    const id = params.id
    
    async function getGrupo(id) {
        try {
            const cookie = await cookies().get("token")
            const response = await fetch(`${environment.api}/api/v1/grupos/grupo/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Authorization ${cookie?.value}`
                }
            })
            if (response) {
                const responseBody = await response.json();
                responseBody.token = cookie?.value
                return responseBody;
            }
    
        } catch (error: any) {
            return { message: error.message}
        }
    }

    const retorno = await getGrupo(id)
    


    return (
        <div className="h-dvh flex flex-col justify-center items-center">
            <Link href={'/painel'} className="absolute top-8 left-8 z-50 bg-slate-800 rounded-md p-2"> grupos </Link>
            <div className="text-2xl font-extrabold p-4 uppercase"> {retorno.grupo.nome} </div>
            <UploadFile token={retorno.token} grupoId={id}></UploadFile>
            <div className="flex min-w-80 max-w-fit">
                <div className="border-2 text-lg font-bold gap-2 border-white w-40  p-2">Nome</div>
                <div className="border-2 text-lg font-bold gap-2 border-white w-40  p-2">Contato</div>
            </div>
            
            {retorno && retorno.usuarios.map(usuario => (
                <div className="flex">
                    <p className="border-2 gap-2 border-white w-40  p-2">{usuario.nome}</p>
                    <p className="border-2 gap-2 border-white w-40  p-2">{usuario.contato.telefone}</p>
                </div>
            ))}
        </div>
    )
}