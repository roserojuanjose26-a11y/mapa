export type Zona={id:string;nombre:string;lat:number;lng:number};
export type Restaurante={id:string;n:string;nombre:string;zona:string;zona_nombre:string;lat:number;lng:number;tipos:string[];precio:number;precio_txt:string;calidad:number;abre:number;cierra:number;horario:string};
export type Datos={zonas:Zona[];calles:{de:string;a:string;min:number;metros:number}[];restaurantes:Restaurante[];antojos:string[];centro:{lat:number;lng:number}};
export type Camino={zona:string;nombre:string;hora:string;lat:number;lng:number;tipo:'origen'|'paso'|'parada'|'destino'};
export type Resultado={ok:boolean;intencion?:any;rec?:{restaurante:Restaurante;hora_salida:string;hora_llegada:string;minutos:number;abierto_al_llegar:boolean;transporte:string;camino:Camino[];paradas:string[];alternativas:{restaurante:Restaurante;minutos:number}[];descartados:{nombre:string;motivo:string}[];explicacion:string};estados?:Record<string,{v:string;motivo?:string}>;sin_opciones?:boolean;error?:string};
