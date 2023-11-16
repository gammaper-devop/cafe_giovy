import http from '../shared/utils/http-commons';
import { IProducto, ITipos } from '../interfaces/Product.interface';

const obtenerProductos = () => {
    return http.get<IProducto[]>('/productos')
}

const crearProducto = (data: IProducto) => {
    return http.post<IProducto>('/productos', data)
}

const editarProducto = (id: string, data: IProducto) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return http.put<any>(`/productos/${id}`, data)
}

const eliminarProducto = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return http.delete<any>(`/productos/${id}`)
}

const editarTipos = (idProducto: string, tipos: ITipos[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return http.put<any>(`productos/tipos/${idProducto}`, tipos)
}

const ProductoService = {
    obtenerProductos,
    crearProducto,
    editarProducto,
    eliminarProducto,
    editarTipos
}

export default ProductoService