"use server";

import { cookies } from 'next/headers'
import Cookies from 'js-cookie';

export const set = async (token) => {
    cookies().set("token", token);

    // const cookieStore = await cookies()
    // cookieStore.set('token', token, { domain: ".clifftechnologies.co", secure: true, sameSite: 'strict' });
    // Cookies.set('token', token, {
    //     domain: ".clifftechnologies.co",
    //     secure: true,
    // })
}

export const get = async () => {
    const cookieStore = await cookies()
    return cookieStore.get('token');
}

export const del = async () => {
    const cookieStore = await cookies()
    return cookieStore.delete('token');
}