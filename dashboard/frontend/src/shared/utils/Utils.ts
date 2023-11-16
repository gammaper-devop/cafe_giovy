import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mostrar_alerta(mensaje: string , icono: any, foco: string) {
    onFocus(foco)
    const MySwal = withReactContent(Swal)
    MySwal.fire({
        title: mensaje,
        icon: icono
    }) 
}

function onFocus(foco: string) {
    if(foco !== ''){
        document.getElementById(foco)?.focus()
    }
}