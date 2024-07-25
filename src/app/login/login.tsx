"use server"

import { redirect } from "next/navigation"
import { environment } from "../enviroment"
import { cookies } from "next/headers"

export default async function handleLogin(currentState: any, form: FormData): Promise<any> {
    const usuario = form.get("usuario")
    const senha = form.get("senha")

    const res = await fetch(`${environment.api}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({usuario, senha})
    })

    const response = await res.json()

    cookies().set("token", response.access_token, {
        secure: true,
        httpOnly: true,
        expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
        path: "/",
        sameSite: "strict",
      });

    if (res.ok) redirect("/painel")

    else return response.error
}
