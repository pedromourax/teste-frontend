"use client"

import { useEffect, useState } from "react"
import { getGrupos } from "./painel";
import Link from "next/link";


export default function Painel() {
    
    let [grupos, setGrupos] = useState([])

    useEffect(() => {
        getGrupos().then((data: any) => {
            if (data.error) {
                return console.log(data.error)
            }
            setGrupos(data)
        })
    }, [])

    return (
        <div className="h-dvh flex flex-col items-center justify-center ">
            <Link href="/painel/criar-grupo" >
                <button className="w-80 border-2 border-white p-2 mb-12 hover:bg-white hover:text-black font-bold transition-all">
                    CRIAR GRUPO
                </button>
            </Link>
            <div className="flex w-80">
                <div className="border-2 gap-2 border-white w-40 p-2">Grupo</div>
                <div className="border-2 gap-2 border-white w-40 p-2">ID</div>
            </div>
            {grupos && grupos.map((grupo: any) => (
                <Link href={`/painel/${grupo.id}?pag=1&por_pag=10`} className="flex w-80 hover:bg-white hover:text-black">  
                    <div className="border-2 w-full border-white p-2"> {grupo.nome} </div>
                    <div className="border-2 w-full border-white p-2"> {grupo.id} </div>
                </Link>
            ))}
        </div>
    )
}