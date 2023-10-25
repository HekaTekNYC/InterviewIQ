import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Input from '../../../shared/components/FormElements/Input';
import Button from '../../../shared/components/FormElements/Button';
import ErrorModal from '../../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner';
import { useForm } from '../../../shared/hooks/form-hook';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { AuthContext } from '../../../shared/context/auth-context';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../../shared/components/util/validators';
import './FlashcardForm.css';

const NewFlashcard = () => {
  const auth = useContext(AuthContext);
   console.log("auth.userId:", auth.userId); 
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      term: {
        value: '',
        isValid: false
      },
      definition: {
        value: '',
        isValid: false
      },
      // category: {
      //   value: '',
      //   isValid: false
      // }
    },
    false
  );

  const navigate = useNavigate(); // Get the navigate function

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:3500/api/flashcards',
        'POST',
        JSON.stringify({
          term: formState.inputs.term.value,
          definition: formState.inputs.definition.value,
          // category: formState.inputs.category.value,
          creator: auth.creatorId
        }),
        { 'Content-Type': 'application/json' }
      );
      navigate('/'); // Use navigate to redirect
    } catch (err) {}
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
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
        {/* <Input
          id="category"
          element="input"
          label="Category"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid category."
          onInput={inputHandler}
        /> */}
        <Button type="submit" disabled={!formState.isValid}>
          ADD FLASHCARD
        </Button>
      </form>
    </div>
  );
};

export default NewFlashcard;
