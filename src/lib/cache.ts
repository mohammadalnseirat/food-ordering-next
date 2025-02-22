import {unstable_cache as nextChace} from 'next/cache'
import {cache as reactChace} from 'react'


type Callback = (...args: any[]) => Promise<any>

export function cache<T extends Callback>(cb:T,keyParts:string[],options:{
    revalidate?:number|false;
    tags?:string[];
}){
    return nextChace(reactChace(cb),keyParts,options)
}