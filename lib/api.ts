import {mockDatos,mockBuscar} from './mock'; import {Datos,Resultado} from './types';
const base=process.env.NEXT_PUBLIC_API_URL||'http://127.0.0.1:8000'; const mock=process.env.NEXT_PUBLIC_USE_MOCK!=='false';
export async function obtenerDatos():Promise<Datos>{if(mock)return mockDatos;const r=await fetch(`${base}/api/datos`);return r.json()}
export async function buscar(intencion:any):Promise<Resultado>{if(mock){await new Promise(r=>setTimeout(r,450));return mockBuscar(intencion.hora)}const r=await fetch(`${base}/api/buscar`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({intencion})});return r.json()}
