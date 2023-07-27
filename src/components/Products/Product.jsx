import { useDispatch } from 'react-redux';
import style from "./Products.module.css";
import { getAllProducts, putProducts } from '../../redux/actions';
import Swal from 'sweetalert2';


function Product({ id, name, image, category, price, status }) {
  const dispatch = useDispatch();
  const estado = status === 1 ? "habilitado" : "inhabilitado";
  const estadoAlert = estado === "inhabilitado" ? "habilitado" : "inhabilitado";
  const Category = category && category.length > 0 ? category[0].name : "N/A";
  
  const handleButton = (value) => {
    const stringNum = String(value)
    const updateProducts = {
        status: stringNum
    }

    console.log(updateProducts)
    dispatch(putProducts(id, updateProducts))
    Swal.fire('El Cambio de Estado', `El producto "${name}" a sido ${estadoAlert}`, 'success')
        .then((result) => {
          // Este código se ejecutará después de que el cuadro de diálogo se cierre.
            if (result.isConfirmed) {
                dispatch(getAllProducts());
            }
        });
    dispatch(getAllProducts())
  }
  



  return (
    <tr>
        <td>{id}</td>
        <td> <img src={image} alt={name} style={{ width: '50px' }} /> {name} </td>
        <td>{price}</td>
        <td>{Category}</td>
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


export default Product;