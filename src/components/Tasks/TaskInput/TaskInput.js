import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './TaskInput.css';
// import styled from 'styled-components';
import styles from './TaskInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background-color: ${(props) =>
//       props.invalid ? 'rgb(253, 165, 156)' : 'transparent'};
//   }

//   & input:focus {
//     outline: none;
//     background: #c8e1e4;
//     border-color: #00358b;
//   }

//   // &.invalid input {
//   //   background-color: rgb(253, 165, 156);
//   //   border-color: red;
//   // }

//   // &.invalid label {
//   //   color: red;
//   // }
// `;

const TaskInput = (props) => {
  const [inputText, setInputText] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputText.trim().length === 0) {
      setIsInputValid(false);
      return;
    }

    props.onAddTask(inputText);
    // This add a clearing input field after form submit
    event.target[0].value = '';
    setInputText('');
    setIsInputValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${
          !isInputValid && styles.invalid
        }`}
      >
        {/* <div className={`form-control ${!isInputValid ? 'invalid' : ''}`}> */}
        {/* <FormControl invalid={!isInputValid}> */}
        <label>Tasks</label>
        {/* <label style={{ color: !isInputValid ? 'red' : 'black' }}>Tasks</label> */}
        <input type="text" onChange={taskInputChangeHandler} />
        {/* <input
          style={{
            borderColor: !isInputValid ? 'red' : 'black',
            background: !isInputValid ? 'salmon' : 'transparent',
          }}
          type="text"
          onChange={taskInputChangeHandler}
        /> */}
        {/* </FormControl> */}
        {/* </div> */}
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskInput;
