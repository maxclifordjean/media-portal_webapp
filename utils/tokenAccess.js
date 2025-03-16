"use server";

import { cookies } from 'next/headers'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

const tokenKey = "token";

export const set = async (token) => {
    await setCookie(tokenKey, token, {
        domain: "clifftechnologies.co",
        secure: true,
        maxAge: 60 * 60
    });
}

export const get = async () => {
    const cookieStore = await cookies()
    return cookieStore.get('token');
}

export const del = async () => {
    const cookieStore = await cookies()
    return cookieStore.delete('token');
}