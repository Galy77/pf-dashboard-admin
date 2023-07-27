import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Categories.module.css"
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { editCategory, getAllCategories } from '../../redux/actions';
import Swal from 'sweetalert2';

function Category (props) {
    const [ editMode, setEditMode ] = useState(false);
    const [ input, setInput ] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch()
    

    const handleClick = () => {
        setEditMode(!editMode)
    }
    
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0]; 
        setSelectedImage(imageFile); 
      };

    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value)
    }

        const editImageClick = (id, name, image) => {
            dispatch(editCategory(id, image, name))
            setEditMode(false)
            Swal.fire("Cambio realizado", `La categoria ${props.name} ha sido modificada`, "success")
            .then((result) => {
                if(result.isConfirmed) {
                    dispatch(getAllCategories());
                }
            })
        }
    return (
        <tr action variant="light" className="d-flex align-items-center">
                <Col className="p-2">{props.id}</Col>
                {!editMode ? 
                <img className={style.userImage} src={props.image} alt="category image" />
                 : <input type='file' onChange={handleImageChange}/> 
                 }
                {!editMode ? 
                <Col className="p-2" style={editMode === true ? {background:"red"} : null}>{props.name}</Col> 
                : <input
                    placeholder={props.name}
                    value={input}
                    onChange={(e) => handleChange(e)}
                  />
                }
                {editMode ? <button onClick={() => editImageClick(props.id, input, selectedImage)}>Editar</button> : null}
                <Col className="p-2">Estado</Col>
                <button onClick={handleClick} style={{background:"transparent", border:"0px transparent solid"}}>
                    <i class="bi bi-pencil"></i>
                </button>
        </tr>
    )
}

export default Category;