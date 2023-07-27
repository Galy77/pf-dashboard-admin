import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { usersNameFilter, usersNameSort } from '../../../../redux/actions';


function UserNameFilter (props) {
    const [selectedOption, setSelectedOption] = useState('');
    const [ input, setInput ] = useState("");
    const dispatch = useDispatch();

    const inputHandler = (e) => {
      const { value } = e.target;
        setInput(value)
    }
    const capital = input.charAt(0).toUpperCase() + input.slice(1);

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      if(option === "a-z"){
        props.setCurrentPage(1)
        dispatch(usersNameSort(option))
      } else if (option === "z-a"){
        props.setCurrentPage(1)
        dispatch(usersNameSort(option))
      }
    }
    
    const handleClick = () => {
      props.setCurrentPage(1)
      dispatch(usersNameFilter(input))
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
        Nombre
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div>
        <Form.Control
          type="text"
          placeholder="nombre"
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

export default UserNameFilter;