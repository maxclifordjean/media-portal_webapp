'use server'
 
import { cookies } from 'next/headers'
 
export async function create(data: any) {
  const cookieStore = await cookies()
 
//   cookieStore.set({
//     name: 'token',
//     value: data,
//     secure:true,
//     domain:"clifftechnologies"
//   })
    console.log('token data',data);
    (await cookies()).set('accessToken', data, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        // sameSite: 'none',
        // secure: false,
    });
}