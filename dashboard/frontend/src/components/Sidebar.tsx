import '../Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
        <div className="m-2">
            <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
            <span className="brand-name fs-4">Logo</span>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
            <Link to='/product' className="list-group-item py-2">
                <i className="bi bi-table fs-5 me-2"></i>
                <span>Productos</span>
            </Link>
            <Link to='/type' className="list-group-item py-2">
                <i className="bi bi-clipboard-data fs-5 me-2"></i>
                <span>Tipo productos</span>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar