import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { usersIdFilter, usersIdSort } from '../../../../redux/actions';
// import style from "../Filters.module.css";

function IdFilter (props) {
    const [selectedOption, setSelectedOption] = useState('');
    const [ input, setInput ] = useState("");
    const dispatch = useDispatch();

    const inputHandler = (e) => {
      const { value } = e.target;
        setInput(value > 0 && value)
    }

    const handleClick = () => {
      props.setCurrentPage(1)
      dispatch(usersIdFilter(input))
    }

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        handleClick()
      }
    };

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      if(option === "asc"){
        props.setCurrentPage(1)
        dispatch(usersIdSort(option))
      } else if (option === "des"){
        props.setCurrentPage(1)
        dispatch(usersIdSort(option))
      }
    }

    return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent">
        ID
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div >
        <Form.Control
          type="number"
          placeholder="Escribe aquí"
          value={input}
          onChange={(e) => inputHandler(e)}
          onKeyPress={input ? handleKeyPress : null}
          />
          <button onClick={input ? () => handleClick() : null}>
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

export default IdFilter;