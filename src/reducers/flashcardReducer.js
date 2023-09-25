import {
  CREATE_FLASHCARD,
  RETRIEVE_FLASHCARDS,
  UPDATE_FLASHCARD,
  DELETE_FLASHCARD,
  DELETE_ALL_FLASHCARDS,
} from "./actions/types";


const initialState = [];

function flashcardReducer(flashcard = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_FLASHCARD:
      return [...flashcard, payload];

    case RETRIEVE_FLASHCARDS:
      return payload;

    case UPDATE_FLASHCARD:
      return flashcards.map((flashcard) => {
        if (flashcard.id === payload.id) {
          return {
            ...flashcard,
            ...payload,
          };
        } else {
          return flashcard;
        }
      });

    case DELETE_FLASHCARDS:
      return flashcards.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_FLASHCARDS:
      return [];

    default:
      return flashcards;
  }
};

export default flashcardReducer;