import React, { useCallback, useReducer } from 'react';
import Input from '../../../components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button';
import './FlashcardForm.css';
import Input from '../../FormElements/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../../shared/components/util/validators';


const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewFlashcard = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="term"
        element="input"
        type="text"
        label="Term"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid term."
        onInput={inputHandler}
      />
      <Input
        id="definition"
        element="textarea"
        label="Definition"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid definition (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="category"
        element="input"
        label="Category"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid category."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD FLASHCARD
      </Button>
    </form>
  );
};

export default NewFlashcard;