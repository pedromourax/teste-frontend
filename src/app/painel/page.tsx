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
            <div className="flex w-64">
                <div className="border-2 gap-2 border-white w-32 p-2">Grupo</div>
                <div className="border-2 gap-2 border-white w-32 p-2">ID</div>
            </div>
            {grupos && grupos.map((grupo: any) => (
                <Link href={`/painel/${grupo.id}`} className="flex w-64">  
                    <div className="border-2 w-full border-gray-200 p-2"> {grupo.nome} </div>
                    <div className="border-2 w-full border-gray-200 p-2"> {grupo.id} </div>
                </Link>
            ))}
            
        </div>
    )
}