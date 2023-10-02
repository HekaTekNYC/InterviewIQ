// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { updateFlashcard, deleteFlashcard } from '../../actions/action'
// import FlashcardService from '../../services/flashcardService';


// const EditFlashcard = (props) => {
//   const initialFlashcardState = {
//     id: null,
//     term: "",
//     definition: "",
//     category: "",
//     completed: "",
//     tag: "",
//     star: "",
//     expandedDef: "",
//     hint1: "",
//     hint2: "",
//     notes: "",
//     published: false
//   };
//   const [currentFlashcard, setCurrentFlashcard] = useState(initialFlashcardState);
//   const [message, setMessage] = useState("");

//   const dispatch = useDispatch();

//   const getFlashcard = id => {
//     FlashcardDataService.get(id)
//       .then(response => {
//         setCurrentFlashcard(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   useEffect(() => {
//     getFlashcard(props.match.params.id);
//   }, [props.match.params.id]);

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setCurrentFlashcard({ ...currentFlashcard, [name]: value });
//   };

//   const updateStatus = status => {
//     const data = {
//       id: currentFlashcard.id,
//       term: currentFlashcard.term,
//       definition: currentFlashcard.definition,
//       category: currentFlashcard.category,
//       tag: currentFlashcard.tag,
//       expandedDef: currentFlashcard.expandedDef,
//       hint1: currentFlashcard.hint1,
//       hint2: currentFlashcard.hint2,
//       published: status
//     };

//     dispatch(updateFlashcard(currentFlashcard.id, data))
//       .then(response => {
//         console.log(response);

//         setCurrentFlashcard({ ...currentFlashcard, published: status });
//         setMessage("The status was updated successfully!");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const updateContent = () => {
//     dispatch(updateFlashcard(currentFlashcard.id, currentFlashcard))
//       .then(response => {
//         console.log(response);

//         setMessage("The flashcard was updated successfully!");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const removeFlashcard = () => {
//     dispatch(deleteFlashcard(currentFlashcard.id))
//       .then(() => {
//         props.history.push("/flashcards");
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   return (
//     <div>
//     {currentFlashcard ? (
//       <div className="edit-form">
//         <h4>Flashcard</h4>
//         <form>
//           <div className="form-group">
//             <label htmlFor="term">Term</label>
//             <input
//               type="text"
//               className="form-control"
//               id="term"
//               name="term"
//               value={currentFlashcard.term}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="definition">Definition</label>
//             <input
//               type="text"
//               className="form-control"
//               id="definition"
//               name="definition"
//               value={currentFlashcard.definition}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="category">Category</label>
//             <input
//               type="text"
//               className="form-control"
//               id="definition"
//               name="definition"
//               value={currentFlashcard.definition}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="tag">Tag</label>
//             <input
//               type="text"
//               className="form-control"
//               id="tag"
//               name="tag"
//               value={currentFlashcard.tag}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="expanded definition">Expanded Definition</label>
//             <input
//               type="text"
//               className="form-control"
//               id="expandedDef"
//               name="expandedDef"
//               value={currentFlashcard.expandedDef}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="hint1">Hint 1</label>
//             <input
//               type="text"
//               className="form-control"
//               id="hint1"
//               name="hint1"
//               value={currentFlashcard.hint1}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="hint2">Hint 2</label>
//             <input
//               type="text"
//               className="form-control"
//               id="hint2"
//               name="hint2"
//               value={currentFlashcard.hint2}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>
//               <strong>Status:</strong>
//             </label>
//             {currentFlashcard.published ? "Published" : "Pending"}
//           </div>
//         </form>

//         {currentFlashcard.published ? (
//           <button
//             className="badge badge-primary mr-2"
//             onClick={() => updateStatus(false)}
//           >
//             UnPublish
//           </button>
//         ) : (
//           <button
//             className="badge badge-primary mr-2"
//             onClick={() => updateStatus(true)}
//           >
//             Publish
//           </button>
//         )}

//         <button className="badge badge-danger mr-2" onClick={removeFlashcard}>
//           Delete
//         </button>

//         <button
//           type="submit"
//           className="badge badge-success"
//           onClick={updateContent}
//         >
//           Update
//         </button>
//         <p>{message}</p>
//       </div>
//     ) : (
//       <div>
//         <br />
//         <p>Please click on a Category...</p>
//       </div>
//     )}
//   </div>
//   );
// };

// export default EditFlashcard;