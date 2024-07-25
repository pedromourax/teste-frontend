"use client"

import { environment } from "@/app/enviroment"
import { useState } from "react"

export default function UploadFile(token: any, grupoId: any) {

    const [file, setFile] = useState<File>()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) {
            return
        }
    
        try {
          const data = new FormData()
          data.set('file', file)
            
          const res = await fetch(`${environment.api}/api/v1/grupos/file/${token.grupoId}`, {
            method: 'POST',
            body: data,
            headers: {
                Authorization: `Authorization ${token.token}`
            }
          })
          if (!res.ok) throw new Error(await res.text())
        } catch (e: any) {
          console.error(e)
        }
      }

    return (
        <form onSubmit={onSubmit}>
            <button type="submit" className="min-w-96 max-w-fit bg-green-800 p-3 my-4 rounded-md">
                Adicionar
            </button>

            <div className="min-w-96 max-w-fit mb-4">
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enviar arquivo</p>
                <input 
                onChange={(e) => setFile(e.target.files?.[0])}
                name="file"
                className="flex w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
            </div>
        </form>
    )
}