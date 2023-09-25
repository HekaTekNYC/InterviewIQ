// import React, { useState, useEffect, useRef } from 'react';
// import FlashcardList from './FlashcardList';
// import './App.css'
// import axios from 'axios'

// function App() {
//   const [flashcards, setFlashcards] = useState([])
//   const [categories, setCategories] = useState([])

//   const categoryEl = useRef()
//   const amountEl = useRef()

//   useEffect(() => {
//     axios
//       .get('http://localhost:3500/')
//       .then(res => {
//         // console.log(res.data) 
//         setCategories(res.data.trivia_categories)
//       })
//   }, [])

//   useEffect(() => {
   
//   }, [])

//   function decodeString(str) {
//     const textArea = document.createElement('textarea')
//     textArea.innerHTML= str
//     return textArea.value
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     axios
//     .get('http://localhost:3500/', {
//       params: {
//         amount: amountEl.current.value,
//         category: categoryEl.current.value
//       }
//     })
//     .then(res => {
//       setFlashcards(res.data.results.map((questionItem, index) => {
//         const answer = decodeString(questionItem.correct_answer)
//         const options = [
//           ...questionItem.incorrect_answers.map(a => decodeString(a)),
//           answer
//         ]
//         return {
//           id: `${index}-${Date.now()}`,
//           question: decodeString(questionItem.question),
//           answer: answer,
//           options: options.sort(() => Math.random() - .5)
//         }
//       }))
//     })
//   }

//   return (
//     <>
//       <form className="header" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="category">Category</label>
//           <select id="category" ref={categoryEl}>
//             {categories.map(category => {
//               return <option value={category.id} key={category.id}>{category.name}</option>
//             })}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="amount">Number of Questions</label>
//           <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
//         </div>
//         <div className="form-group">
//           <button className="btn">Generate</button>
//         </div>
//       </form>
//       <div className="container">
//         <FlashcardList flashcards={flashcards} />
//       </div>
//     </>
//   );
// }

// export default App;




import { Routes, Route } from 'react-router-dom'
import Layout from './components/dashboard/Layout'
import Public from './components/dashboard/Public'
import Login from './features/auth/Login';
import DashLayout from './components/dashboard/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'

function App() {

  console.log('Rendering App component');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>

          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>

        </Route>{/* End Dash */}

      </Route>
    </Routes>
  );
}

export default App;

// do it for the add yuh!