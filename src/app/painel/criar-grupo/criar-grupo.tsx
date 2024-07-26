"use server"

import { redirect } from "next/navigation"
import { environment } from "../../enviroment"
import { cookies } from "next/headers"

export default async function handleSubmit(currentState: any, form: FormData): Promise<any> {
    const nome = form.get("nome")
    const data = { nome }
    const cookie = await cookies().get("token")

    const res = await fetch(`${environment.api}/api/v1/grupos/criar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Authorization ${cookie?.value}`
        },
        body: JSON.stringify(data)
    })

    const response = await res.json()

    // cookies().set("token", response.access_token, {
    //     secure: true,
    //     httpOnly: true,
    //     expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    //     path: "/",
    //     sameSite: "strict",
    //   });

    if (res.ok) redirect("/painel")

    else return response
}
