// import {
//   CREATE_FLASHCARD,
//   RETRIEVE_FLASHCARDS,
//   UPDATE_FLASHCARD,
//   DELETE_FLASHCARD,
//   DELETE_ALL_FLASHCARDS,
// } from "./types";
// import FlashcardService from "../services/flashcardService";



// export const createFlashcard = (term, definition) => async (dispatch) => {
//   try {
//     const res = await FlashcardService.create({ term, definition});

//     dispatch({
//       type: CREATE_FLASHCARD,
//       payload: res.data,
//     });

//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// export const retrieveFlashcard = () => async (dispatch) => {
//   try {
//     const res = await FlashcardService.getAll();

//     dispatch({
//       type: RETRIEVE_FLASHCARD,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const updateFlashcard = (id, data) => async (dispatch) => {
//   try {
//     const res = await FlashcardService.update(id, data);

//     dispatch({
//       type: UPDATE_FLASHCARD,
//       payload: data,
//     });

//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// export const deleteFlashcard = (id) => async (dispatch) => {
//   try {
//     await FlashcardService.remove(id);

//     dispatch({
//       type: DELETE_FLASHCARD,
//       payload: { id },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const deleteAllFlashcards= () => async (dispatch) => {
//   try {
//     const res = await FlashcardService.removeAll();

//     dispatch({
//       type: DELETE_ALL_FLASHCARDS,
//       payload: res.data,
//     });

//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// export const findFlashcardsByCategory = (category) => async (dispatch) => {
//   try {
//     const res = await FlashcardService.findByCategory(category);

//     dispatch({
//       type: RETRIEVE_FLASHCARDS,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };


// export default flashcardAction;