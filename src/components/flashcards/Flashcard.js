// import React, { useEffect } from 'react';
// import './flashcard.styles.css';

// const Flashcard = () => {
//   useEffect(() => {
//     const createFlashcard = async () => {
//       const requestBody = {

//         user: '',
//         term: '',
//         definition: '',
//       };

//       try {
//         const response = await fetch('http://localhost:3500/dash/AddFlashcard', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(requestBody),
//         });

//         if (response.ok) {
//           console.log('New flashcard created successfully');
//           // Handle any UI updates or redirection here
//         } else {
//           const errorData = await response.json();
//           console.log('Error creating flashcard:', errorData.message);
//         }
//       } catch (error) {
//         console.log('Error creating flashcard:', error);
//       }
//     };

//     createFlashcard();
//   }, []); // Empty dependency array to run once on mount

//   return (
//     <div>
//       {/* This is the code for the flashcard flip */}
//       <div className="flashcard-container">
//         <div className="flip-card-inner">
//           <div className="flip-card-front">
//             <h1>This is my Term</h1>
//             {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
//           </div>
//           <div className="flip-card-back">
//             <h1>Definition</h1>
//             <p>We need to figure out how to pull MongoDB info onto card</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Flashcard;


// import React from 'react'
// import './flashcard.styles.css'


// const Flashcard = () => {
//   return (
//     <div>
//     {/* /*This is the code for the flashcard flip */ }
//       <div className="flashcard-container">
//   <div className="flip-card-inner">
//     <div className="flip-card-front">
//     <h1>This is my Term</h1>
//       {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
//     </div>
//     <div className="flip-card-back">
//       <h1>Definition</h1>
//       <p>We need to figure out how to pull MongoDB info onto card</p>
//     </div>
//   </div>
// </div>
// </div>
//   )
// }

// export default Flashcard;