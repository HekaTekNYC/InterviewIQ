import {
  CREATE_FLASHCARD,
  RETRIEVE_FLASHCARDS,
  UPDATE_FLASHCARD,
  DELETE_FLASHCARD,
  DELETE_ALL_FLASHCARDS,
} from "./types";


import FlashcardDataService from "../services/flash";

export const createFlashcard = (title, description) => async (dispatch) => {
  try {
    const res = await FlashcardDataService.create({ title, description });

    dispatch({
      type: CREATE_FLASHCARD,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveFlashcard = () => async (dispatch) => {
  try {
    const res = await FlashcardDataService.getAll();

    dispatch({
      type: RETRIEVE_FLASHCARD,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateFlashcard = (id, data) => async (dispatch) => {
  try {
    const res = await FlashcardDataService.update(id, data);

    dispatch({
      type: UPDATE_FLASHCARD,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteFlashcard = (id) => async (dispatch) => {
  try {
    await FlashcardDataService.remove(id);

    dispatch({
      type: DELETE_FLASHCARD,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllFlashcards= () => async (dispatch) => {
  try {
    const res = await FlashcardDataService.removeAll();

    dispatch({
      type: DELETE_ALL_FLASHCARDS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findFlashcardsByTitle = (title) => async (dispatch) => {
  try {
    const res = await FlashcardDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_FLASHCARDS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
