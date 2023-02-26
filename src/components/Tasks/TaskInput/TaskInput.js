import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './TaskInput.css';

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
      <div className={`form-control ${!isInputValid ? 'invalid' : ''}`}>
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
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskInput;
