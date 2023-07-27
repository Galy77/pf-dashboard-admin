import { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import style from "../Filters.module.css"
import { useDispatch } from 'react-redux';
import { productIdFilter, productIdSort } from '../../../redux/actions';

function ProductIdFilter (props) {
    const [ selectedOption, setSelectedOption ] = useState(null);
    const [ input, setInput ] = useState("");
    const dispatch = useDispatch();

    const inputHandler = (e) => {
      const { value } = e.target;
        setInput(value > 0 && value)
    }

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      if(option === "asc"){
        props.setCurrentPage(1)
        dispatch(productIdSort(option))
      } else if (option === "des"){
        props.setCurrentPage(1)
        dispatch(productIdSort(option))
      }
    }

    const handleClick = () => {
      props.setCurrentPage(1)
      dispatch(productIdFilter(input))
    }
    
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        handleClick()
      }
    };

    return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent">
        ID
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className={style.idProductFilter}>
        <Form.Control
          type="number"
          placeholder="Escribe aquí"
          value={input}
          onChange={(e) => inputHandler(e)}
          onKeyPress={handleKeyPress}
          />
          <button onClick={() => handleClick()}>
            <i class="bi bi-search" ></i>
          </button>
        </div>
      <Dropdown.Divider />
      <Dropdown.Item 
      active={selectedOption === 'asc'}
      onClick={() => handleOptionSelect('asc')}
      >Asc</Dropdown.Item>
      <Dropdown.Item 
      active={selectedOption === 'des'}
      onClick={() => handleOptionSelect('des')}
      >Des</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}

export default ProductIdFilter;