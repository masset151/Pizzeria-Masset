export interface AuthResponse{

    ok: boolean
    msg: string 
    email?: string
    token?: string
    nombre?:string
    uid?:string

}

export interface Usuario{
    uid:string,
    nombre:string
    
}