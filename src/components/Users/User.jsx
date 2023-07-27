import { useDispatch } from 'react-redux';import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Users.module.css"
import { getAllUsers, putUsers } from '../../redux/actions';
import Swal from 'sweetalert2';
import userImage from '../../assets/userIma.jpg'


function User({ id, full_name, email, status, role, image }) {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    let boolean = false;

    const rol = role === 1 ? "usuario" : "admin";
    const estado = status === 1 ? "habilitado" : "inhabilitado";
    const estadoAlert = estado === "inhabilitado" ? "habilitado" : "inhabilitado";

    const handleButton = (value) => {
        if(id === 1 && full_name === 'super'){
            return Swal.fire('Error en el Cambio de Estado', 'No puedes Deshabilitar al super admin', 'error')
        }
        const stringNum = String(value)
        const updateUsers = {
            status: stringNum
        }
        
        dispatch(putUsers(id, updateUsers))
        Swal.fire('El Cambio de Estado', `el usuario ${full_name} ha sido ${estadoAlert}`, 'success')
            .then((result) => {
                // Este código se ejecutará después de que el cuadro de diálogo se cierre.
                if (result.isConfirmed) {
                    dispatch(getAllUsers());
                }
            });
    }

    const handleButtonAdmin = (value) => {
        if(id === 1 && full_name === 'super'){
            return Swal.fire('Error en el Cambio de Rol', 'No puedes quitarle el rol al super admin', 'error')                       
        }

        const stringNum = String(value)
        const updateUsers = {
            role: stringNum
        }
                
        dispatch(putUsers(id, updateUsers))
        Swal.fire('El Cambio de Rol', `Del usuario ${full_name} ha sido exitoso`, 'success')
            .then((result) => {
                // Este código se ejecutará después de que el cuadro de diálogo se cierre.
                if (result.isConfirmed) {
                    dispatch(getAllUsers());
                }
            });
    }

    return (
            <tr>
                <td>{id}</td>
                <td> <img src={image ? image : userImage} alt={full_name} style={{ width: '50px' }} /></td>
                <td>{full_name}</td>
                <td>{email}</td>
                <td>
                    {
                        role === 2
                        ?
                        <button onClick={() => handleButtonAdmin(1)} className={style.rolAdmin}>
                            <i className={`bi bi-dash-circle`}></i>
                            {rol}
                        </button>
                        :
                        <button onClick={() => handleButtonAdmin(2)} className={style.rolUser}>
                            <i className={`bi bi-check-circle p-2`}></i>
                            {rol}
                        </button>
                    }
                </td>
                <td>
                {
                    status === 1
                    ? 
                    <button onClick={() => handleButton(0)} className={style.buttonHabilidato}>
                        <i className={`bi bi-check-circle p-2`}></i>
                        {estado}
                    </button> 
                    : 
                    <button onClick={() => handleButton(1)} className={style.buttonDeshabilidato}>
                        <i className={`bi bi-dash-circle`}></i>
                        {estado}
                    </button>
                }
                </td>
            </tr>
    )
}

export default User;
