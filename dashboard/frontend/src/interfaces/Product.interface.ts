export interface IProducto {
    _id?: string
    descripcion: string
    image: string
    tipos: ITipos[]
}

export interface ITipos {
    _id?: string
    nombre: string
    precio: number
}