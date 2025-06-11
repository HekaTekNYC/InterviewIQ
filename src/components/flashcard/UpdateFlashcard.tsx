// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import Input from '../../../shared/components/FormElements/Input';
// import Button from '../../../shared/components/FormElements/Button.js';
// import Card from '../../../shared/components/UIElements/Card';
// import {
//   VALIDATOR_REQUIRE,
//   VALIDATOR_MINLENGTH
// } from '../../shared/util/validators';
// import { useForm } from '../../shared/hooks/form-hook';
// import './PlaceForm.css';

// const DUMMY_PLACES = [
//   {
//     id: 'p1',
//     title: 'Empire State Building',
//     description: 'One of the most famous sky scrapers in the world!',
//     imageUrl:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
//     address: '20 W 34th St, New York, NY 10001',
//     location: {
//       lat: 40.7484405,
//       lng: -73.9878584
//     },
//     creator: 'u1'
//   },
//   {
//     id: 'p2',
//     title: 'Emp. State Building',
//     description: 'One of the most famous sky scrapers in the world!',
//     imageUrl:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
//     address: '20 W 34th St, New York, NY 10001',
//     location: {
//       lat: 40.7484405,
//       lng: -73.9878584
//     },
//     creator: 'u2'
//   }
// ];

// const UpdateFlashcard = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const flashcardId = useParams().flashcardId;

//   const [formState, inputHandler, setFormData] = useForm(
//     {
//       term: {
//         value: '',
//         isValid: false
//       },
//       definition: {
//         value: '',
//         isValid: false
//       }
//     },
//     false
//   );

//   const identifiedFlashcard = DUMMY_FLASHCARD.find(f => f.id === userId);

//   useEffect(() => {
//     if (identifiedFlashcard) {
//       setFormData(
//         {
//           title: {
//             value: identifiedFlashcard.term,
//             isValid: true
//           },
//           definition: {
//             value: identifiedFlashcard.definition,
//             isValid: true
//           }
//         },
//         true
//       );
//     }
//     setIsLoading(false);
//   }, [setFormData, identifiedFlashcard]);

//   const flashcardUpdateSubmitHandler = event => {
//     event.preventDefault();
//     console.log(formState.inputs);
//   };

//   if (!identifiedFlashcard) {
//     return (
//       <div className="center">
//         <Card>
//           <h2>Could not find flashcard!</h2>
//         </Card>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div className="center">
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   return (
//     <form className="place-form" onSubmit={flashcardUpdateSubmitHandler}>
//       <Input
//         id="term"
//         element="input"
//         type="text"
//         label="Term"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid term."
//         onInput={inputHandler}
//         initialValue={formState.inputs.term.value}
//         initialValid={formState.inputs.term.isValid}
//       />
//       <Input
//         id="definition"
//         element="textarea"
//         label="Definition"
//         validators={[VALIDATOR_MINLENGTH(5)]}
//         errorText="Please enter a valid definition (min. 5 characters)."
//         onInput={inputHandler}
//         initialValue={formState.inputs.definition.value}
//         initialValid={formState.inputs.definition.isValid}
//       />
//       <Button type="submit" disabled={!formState.isValid}>
//         UPDATE FLASHCARD
//       </Button>
//     </form>
//   );
// };

// export default UpdateFlashcard;
