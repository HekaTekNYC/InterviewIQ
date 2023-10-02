// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import {
// //   retrieveFlashcards,
// //   findFlashcardsByCategory,
// //   deleteAllFlashcards,
// // } from "../../actions/action.js";

// import  { retrieveFlashcard, findFlashcardsByCategory, deleteAllFlashcards }  from '../../actions/action'

// const FlashcardList = () => {
//   const [currentFlashcard, setCurrentFlashcard] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [searchCategory, setSearchCategory] = useState("");

//   const flashcards = useSelector(state => state.flashcards);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(retrieveFlashcards());
//   }, []);

//   const onChangeSearchCategory = e => {
//     const searchCategory = e.target.value;
//     setSearchCategory(searchCategory);
//   };

//   const refreshData = () => {
//     setCurrentFlashcard(null);
//     setCurrentIndex(-1);
//   };

//   const setActiveFlashcard = (flashcard, index) => {
//     setCurrentFlashcard(flashcard);
//     setCurrentIndex(index);
//   };

//   const removeAllFlashcards = () => {
//     dispatch(deleteAllFlashcards())
//       .then(response => {
//         console.log(response);
//         refreshData();
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const findByCategory = () => {
//     refreshData();
//     dispatch(findFlashcardsByCategory(searchCategory));
//   };

//   return (
//   <div className="list row">
//       <div className="col-md-8">
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by category"
//             value={searchCategory}
//             onChange={onChangeSearchCategory}
//           />
//           <div className="input-group-append">
//             <button
//               className="btn btn-outline-secondary"
//               type="button"
//               onClick={findByCategory}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <h4>Flaschards List</h4>

//         <ul className="list-group">
//           {flashcards &&
//             flashcards.map((flashcard, index) => (
//               <li
//                 className={
//                   "list-group-item " + (index === currentIndex ? "active" : "")
//                 }
//                 onClick={() => setActiveFlashcard(flashcard, index)}
//                 key={index}
//               >
//                 {flashcard.term}
//               </li>
//             ))}
//         </ul>

//         <button
//           className="m-3 btn btn-sm btn-danger"
//           onClick={removeAllFlashcards}
//         >
//           Remove All
//         </button>
//       </div>
//       <div className="col-md-6">
//         {/* {currentFlashcard ? (
//           <div>
//             <h4>Flashcard</h4>
//             <div>
//               <label>
//                 <strong>Term:</strong>
//               </label>{" "}
//               {currentFlaschard.term}
//             </div>
//             <div>
//               <label>
//                 <strong>Definition:</strong>
//               </label>{" "}
//               {currentFlashcard.definition}
//             </div>
//             <div>
//               <label>
//                 <strong>Status:</strong>
//               </label>{" "}
//               {currentFlashcard.published ? "Published" : "Pending"}
//             </div>

//             <Link
//               to={"/flashcard/" + currentFlashcard.id}
//               className="badge badge-warning"
//             >
//               Edit
//             </Link>
//           </div>
//         ) : (
//           <div>
//             <br />
//             <p>Please click on a Category...</p>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default FlashcardList;
