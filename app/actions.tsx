'use server'
 
import { cookies } from 'next/headers'
 
export async function create(data) {
  const cookieStore = await cookies()
 
  cookieStore.set({
    name: 'token',
    value: data,
    httpOnly: true,
    path: '/',
  })
}