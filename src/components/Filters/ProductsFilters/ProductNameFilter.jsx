import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import style from "../Filters.module.css"
import { useDispatch } from 'react-redux';
import { productNameFilter, productNameSort } from '../../../redux/actions';

function ProductNameFilter () {
    const [selectedOption, setSelectedOption] = useState(null);
    const [ input, setInput ] = useState("");
    const dispatch = useDispatch();

    const inputHandler = (e) => {
      const { value } = e.target;
        setInput(value)
    }

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      if(option === "a-z"){
        dispatch(productNameSort(option))
      } else if (option === "z-a"){
        dispatch(productNameSort(option))
      }
    }

    const handleClick = () => {
      dispatch(productNameFilter(input))
    }
    return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent">
        Nombre
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className={style.idProductFilter}>
        <Form.Control
          type="text"
          placeholder="nombre"
          value={input}
          onChange={(e) => inputHandler(e)}
          />
        <button onClick={() => handleClick()}>
            <i class="bi bi-search" ></i>
        </button>
        </div>
        <Dropdown.Divider />
        <Dropdown.Item 
          active={selectedOption === 'a-z'}
          onClick={() => handleOptionSelect('a-z')}
        >A-Z</Dropdown.Item>
        <Dropdown.Item
          active={selectedOption === 'z-a'}
          onClick={() => handleOptionSelect('z-a')}
        >Z-A</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}

export default ProductNameFilter;