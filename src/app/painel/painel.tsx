"use server"

import { cookies } from "next/headers";
import { environment } from "../enviroment"


export const getGrupos = async () => {
    try {
        const cookie = await cookies().get("token")
        const response = await fetch(`${environment.api}/api/v1/grupos`, {
            method: "GET",
            headers: {
                Authorization: `Authorization ${cookie?.value}`
            }
        })
        if (response) {
            const responseBody = await response.json();
            return responseBody;
        }

    } catch (error: any) {
        return { message: error.message}
    }
}