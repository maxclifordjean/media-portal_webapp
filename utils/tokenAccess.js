import { setCookie, getCookie, deleteCookie } from 'cookies-next';

const tokenKey = "token";

export const set = async (token) => {
    await setCookie(tokenKey, token, {
        domain: "clifftechnologies.co",
        secure: true,
        maxAge: 60 * 60 * 24 * 7
    });
}

export const get = async () => {
    return await getCookie(tokenKey);
}

export const del = async () => {
    return await deleteCookie(tokenKey);
}