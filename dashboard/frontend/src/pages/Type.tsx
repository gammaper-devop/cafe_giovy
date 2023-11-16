/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import ProductoService from '../services/ProductService'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

import { IProducto, ITipos } from '../interfaces/Product.interface'
import { mostrar_alerta } from '../shared/utils/Utils'

function TypeProduct() {

    const [productos, setProductos] = useState<IProducto[]>([])
    const [tipoProductos, setTipoProductos] = useState<ITipos[]>([])
    const [idProducto, setIdProducto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [nombre, setNombre] = useState<string>('')
    const [precio, setPrecio] = useState<string | number>('')
    const [title, setTitle] = useState('')
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = (idProducto: string, descripcion: string, index: number) => {
        setTitle('Editar tipo de producto');
        setIdProducto(idProducto);
        setDescripcion(descripcion);
      
        const selectedProduct = productos.find((product) => product._id === idProducto);
        if (selectedProduct && selectedProduct.tipos) {
            // Create a copy of the tipos array to avoid unintended side effects
            const tiposCopy = [...selectedProduct.tipos];
            setTipoProductos(tiposCopy);
    
            // Now, set individual values based on the provided index
            setNombre(tiposCopy[index]?.nombre || '');
            setPrecio(tiposCopy[index]?.precio || 0);
        }
        setShow(true);
      };

    useEffect(() => {
        obtenerProductos()
    }, [])

    const handleGuardar = () => {
        console.log('tipoProductos', tipoProductos)
        const actualizarTipos = tipoProductos.map((tipo, index) => ({
        ...tipo,
        _id: tipoProductos[index]._id,
        nombre: tipoProductos[index].nombre,
        precio: tipoProductos[index].precio,
        }));
    
        // You may want to update the state or make an API call here
        console.log('Id Product:', idProducto);
        console.log('Updated tipos:', actualizarTipos);
        ProductoService.editarTipos(idProducto, actualizarTipos).then(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (respuesta: any) => {
                mostrar_alerta('Se actualizó correctamente los tipos de productos', 'success', '')
                console.log('Respuesta -->', respuesta.data)
            }
        )
        .catch((e: Error)=> {
            mostrar_alerta('Algo malo sucedio al actualizar los tipos de productos', 'error', '')
            console.error(e)
        })
        obtenerProductos()
        // Close the modal
        handleClose()
  };

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

    return (
        <>
            <div className='container-fluid'>
                <h1>Pagina de tipo de productos</h1>
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                            <div className="table-responsive">
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
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
                                                        <button onClick={()=> handleShow(producto._id || '', producto.descripcion, i)} className='btn btn-warning'>
                                                            <i className='fa-solid fa-edit'></i>
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
                        <Modal.Title>{title} - Producto: {descripcion}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        {tipoProductos.map((tipo, index) => (
                            <div key={index}>
                            <Form.Group className='mb-3' controlId={`nombre-${index}`}>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                type='text'
                                placeholder='nombre'
                                value={tipo.nombre}
                                onChange={(e) => {
                                    const updatedTipos = [...tipoProductos];
                                    updatedTipos[index].nombre = e.target.value;
                                    setTipoProductos(updatedTipos);
                                }}
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId={`precio-${index}`}>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                type='text'
                                placeholder='precio'
                                value={tipo.precio}
                                onChange={(e) => {
                                    const updatedTipos = [...tipoProductos];
                                    const newValue = parseFloat(e.target.value);
                                    updatedTipos[index].precio = newValue;
                                    setTipoProductos(updatedTipos);
                                }}
                                />
                            </Form.Group>
                            </div>
                        ))}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>Cerrar</Button>
                        <Button variant='primary' onClick={() => handleGuardar()}>Guardar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default TypeProduct;