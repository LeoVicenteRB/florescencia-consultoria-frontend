'use client';
export const API_URL=process.env.NEXT_PUBLIC_API_URL??'http://localhost:3101/api';
export type Session={user:{id?:string;name:string;email:string;role:string};accessToken:string};
export function session(){try{return JSON.parse(localStorage.getItem('florescencia.session')??'null') as Session|null}catch{return null}}
export async function api<T>(path:string,options:RequestInit={}){const s=session();const response=await fetch(`${API_URL}${path}`,{...options,headers:{...(!(options.body instanceof FormData)?{'Content-Type':'application/json'}:{}),...(s?{Authorization:`Bearer ${s.accessToken}`} :{}),...options.headers}});const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(Array.isArray(data.message)?data.message.join(' '):data.message??'Não foi possível concluir');return data as T}
