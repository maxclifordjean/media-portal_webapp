"use server";

import { cookies } from 'next/headers'
import { setCookie } from 'cookies-next';

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
    return await cookieStore.get(tokenKey);
}

export const del = async () => {
    const cookieStore = await cookies()
    return await cookieStore.delete(tokenKey);
}