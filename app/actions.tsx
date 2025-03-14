'use server'
 
import { cookies } from 'next/headers'
 
export async function create(data: any) {
  const cookieStore = await cookies()
 
  cookieStore.set({
    name: 'token',
    value: data,
    secure:true,
    domain:".clifftechnologies"
  })
}