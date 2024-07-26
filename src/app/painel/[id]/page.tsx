import { cookies } from "next/headers"
import { environment } from "@/app/enviroment"
import Link from "next/link"
import UploadFile from "@/components/upload"
import PagControl from "./grupo"

export default async function groupoDetail({params, searchParams}){
    const id = params.id

    const pag = searchParams.pag || '1'
    const por_pag = searchParams.pag_pag ?? '10'

    const start = (Number(pag) - 1) * Number(por_pag) 
    const end = start + Number(por_pag)
    console.log("OLAAAAAAA")

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
                console.log(params)
                const responseBody = await response.json();
                responseBody.token = cookie?.value
                return responseBody;
            }
    
        } catch (error: any) {
            return { message: error.message}
        }
    }

    const retorno = await getGrupo(id)

    const usuarios_pag = retorno.usuarios.slice(start, end)
    console.log(usuarios_pag, start, end, pag)

    return (
        <div className="min-h-dvh max-h-fit flex flex-col justify-center items-center">
            <Link href={'/painel'} className="absolute top-8 left-8 z-50 bg-slate-800 rounded-md p-2"> Grupos </Link>
            <div className="text-2xl font-extrabold p-4 uppercase"> {retorno.grupo.nome} </div>
            <UploadFile token={retorno.token} grupoId={id}></UploadFile>
            <div className="flex w-80">
                <div className="border-2 text-lg font-bold gap-2 border-white w-1/2  p-2">Nome</div>
                <div className="border-2 text-lg font-bold gap-2 border-white w-1/2  p-2">Contato</div>
            </div>
            {/* {JSON.stringify(retorno)} */}
            {usuarios_pag.map(usuario => (
                <div className="flex">
                    <p className="border-2 gap-2 border-white w-40  p-2">{usuario.nome}</p>
                    <p className="border-2 gap-2 border-white w-40  p-2">{usuario.contato.telefone}</p>
                </div>
            ))}
            <PagControl
                hasNextPage={end < retorno.usuarios.length}
                hasPrevPage={start > 0}
            />
        </div>
    )
}