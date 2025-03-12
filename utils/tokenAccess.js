"use server";

import { cookies } from 'next/headers'

export const set = async (token) => {
    const cookieStore = await cookies()
    cookieStore.set('token', token);
}

export const get = async () => {
    const cookieStore = await cookies()
    return cookieStore.get('token');
}

export const del = async () => {
    const cookieStore = await cookies()
    return cookieStore.delete('token');
}