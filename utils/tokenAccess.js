"use server";

import { cookies } from 'next/headers'

export const set = async (token) => {
    try {
        console.log('tokenaccess:set:before', token);
        const cookieStore = await cookies();
        // await cookieStore.set('token', token, {
        //     domain: "clifftechnologies.co",
        //     expires: new Date(Date.now() + 900000),
        //     httpOnly: true,
        //     secure: true
        // });
    } catch (e) {
        console.error('tokenAccess:erro', e);
    }
}

export const get = async () => {
    const cookieStore = await cookies()
    return cookieStore.get('token');
}

export const del = async () => {
    const cookieStore = await cookies()
    return cookieStore.delete('token');
}