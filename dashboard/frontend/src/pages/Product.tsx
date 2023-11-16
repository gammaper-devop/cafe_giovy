/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import ProductoService from '../services/ProductService'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { mostrar_alerta } from '../shared/utils/Utils'

import { IProducto, ITipos } from '../interfaces/Product.interface'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function Product() {

    const [productos, setProductos] = useState<IProducto[]>([])
    const [tipoProductos, setTipoProductos] = useState<ITipos[]>([])
    const [idProducto, setIdProducto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [rutaImagen, setRutaImagen] = useState('')
    const [title, setTitle] = useState('')
    const [operacion, setOperacion] = useState(1)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = (operacion: number, idProducto: string, descripcion: string, ruta: string) => {
        if (operacion === 1){
            abrirModal(1, '', '', '')
        }
        else if (operacion === 2){
            abrirModal(2, idProducto, descripcion, ruta)
        }
        setShow(true)   
    }

    useEffect(() => {
        obtenerProductos()
    }, [])

    const obtenerProductos = () => {
        ProductoService.obtenerProductos().then(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (respuesta: any) => {
                setProductos(respuesta.data)
                //console.log('Info Productos -->', respuesta.data)
            }
        )
        .catch((e: Error)=> {
            console.error(e)
        })
    }

    const abrirModal = (operacion: number, idProducto: string, descripcion: string, ruta: string) => {
        setIdProducto('')
        setDescripcion('')
        setRutaImagen('')
        setOperacion(operacion)

        if(operacion === 1){
            setTitle('Registrar Producto')
        }
        else if(operacion === 2){
            setTitle('Editar Producto')
            setIdProducto(idProducto)
            setDescripcion(descripcion)
            setRutaImagen(ruta)
            const selectedProduct = productos.find((product) => product._id === idProducto)
            if(selectedProduct){
                setTipoProductos(selectedProduct.tipos)
            }
        }
    }

    const validar = () => {
        if(descripcion.trim() === ''){
            mostrar_alerta('Escribe la descripcion del producto', 'warning', descripcion)    
        }
       else if(rutaImagen.trim() === '') {
            mostrar_alerta('Escribe la ruta de la imagen', 'warning', rutaImagen)
       } 
       else {
        if(operacion === 1){
            const bodyProductoCrear: IProducto = {
                descripcion: descripcion.trim(),
                image: rutaImagen.trim(),
                tipos: [
                    {
                        nombre: 'Pequeño',
                        precio: 12.60
                    },
                    {
                        nombre: 'Mediano',
                        precio: 15.00
                    },
                    {
                        nombre: 'Grande',
                        precio: 17.99
                    }
                ]
            }
            ProductoService.crearProducto(bodyProductoCrear).then(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (respuesta: any) => {
                    mostrar_alerta('Se creo correctamente el producto', 'success', '')
                    console.log(respuesta.data)
                }
            )
            .catch((e: Error)=> {
                mostrar_alerta('Algo malo sucedio al crear el producto', 'error', '')
                console.error(e)
            })
            obtenerProductos()
            handleClose()
        }
        else {
            const bodyProductoEditar: IProducto = {
                _id: idProducto.trim(),
                descripcion: descripcion.trim(),
                image: rutaImagen.trim(),
                tipos: tipoProductos
            }
            ProductoService.editarProducto(idProducto.trim(), bodyProductoEditar).then(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (respuesta: any) => {
                    mostrar_alerta('Se actualizó correctamente el producto', 'success', '')
                    console.log(respuesta.data)
                }
            )
            .catch((e: Error)=> {
                mostrar_alerta('Algo malo sucedio al actualizar el producto', 'error', '')
                console.error(e)
            })
            obtenerProductos()
            handleClose()
        }
       }
    }

    const eliminaProducto = (id: string, producto: string) => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: `¿Esta seguro de eliminar el producto: ${producto}?`,
            icon: 'question', 
            text: 'No se podra dar marcha atras!!',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'cancelar'
        }).then((resultado)=>{
            if(resultado.isConfirmed){
                setIdProducto(id)
                ProductoService.eliminarProducto(id).then().catch((e: Error) => console.error(e))
                obtenerProductos()
            }
            else mostrar_alerta('El producto NO fue eliminado', 'info', '')
        })
    }

    return (
        <>
            <div className='container-fluid'>
                <h1>Pagina de productos</h1>
                <div className="container-fluid">
                    <div className="row g-3 my-2">
                        <div className="col-md-4 offset-md-4">
                            <div className="d-grid">
                                <Button className='btn btn-dark' onClick={() => handleShow(1, '', '', '')}>Añadir</Button>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                            <div className="table-responsive">
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>ID</th>
                                            <th>Descripcion</th>
                                            <th>Ruta imagen</th>
                                            <th>Tipos</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-group-divider'>
                                        {
                                            productos.map((producto, i) => (         
                                                <tr key={producto._id}>
                                                    <td>{(i+1)}</td>
                                                    <td>{ producto._id}</td>
                                                    <td>{ producto.descripcion }</td>
                                                    <td>{ producto.image}</td>
                                                    <td>
                                                        {producto.tipos.map((tipoProductos) =>(
                                                            <div key={tipoProductos._id}>
                                                                {tipoProductos.nombre}: ${tipoProductos.precio}
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        <button onClick={()=> handleShow(2, producto._id || '', producto.descripcion, producto.image)} className='btn btn-warning'>
                                                            <i className='fa-solid fa-edit'></i>
                                                        </button>
                                                        &nbsp;
                                                        <button onClick={() => eliminaProducto(producto._id || '', producto.descripcion)} className='btn btn-danger'>
                                                            <i className='fa-solid fa-trash'></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className='mb-3' controlId='descripcion'>
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control
                                    type='input'
                                    placeholder='descripcion'
                                    value={descripcion}
                                    onChange={(e)=> setDescripcion(e.target.value)}
                                    autoFocus 
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='rutaImgen'>
                                <Form.Label>Ruta de imagen</Form.Label>
                                <Form.Control
                                    type='input'
                                    placeholder='ruta de imagen'
                                    value={rutaImagen}
                                    onChange={(e)=> setRutaImagen(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>Cerrar</Button>
                        <Button variant='primary' onClick={()=> validar()}>Guardar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Product;