import { Routes, Route } from 'react-router-dom'
// import Layout from './components/dashboard/Layout'
// import Public from './components/dashboard/Public'
import ShowFlashcardList from './components/flashcard/ShowFlashcardList'
import CreateFlashcard from './components/flashcard/createFlashcard/CreateFlashcard'
import UpdateFlashcard from './components/flashcard/UpdateFlashcard'
import Flashcard from './components/flashcard/Flashcard'



function App() {
  
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<ShowFlashcardList />} />
        <Route path='/create-flashcard' element={<CreateFlashcard />} />
        <Route path='/update-flashcard' element={<UpdateFlashcard />} />
        <Route path='/edit-flashcard/:id' element={<Flashcard />} />
        
      </Routes>
  </div>
   );
  }
  
  export default App;
  
  // import Login from './features/auth/Login';
  // import DashLayout from './components/dashboard/DashLayout'
  // import Welcome from './features/auth/Welcome'
  // import FlashcardList from './components/flashcards/FlashcardList';
  // import AddFlashcard from './components/flashcards/AddFlashcard';
  // import EditFlashcard from './components/flashcards/EditFlashcard';
  // import UsersList from './features/users/UsersList'
  // import api from './http-common';
  // import FlashcardPage from './pages/FlashcardPage';





// This is our old info that sat right under function App() {};
  // const [flashcards, setFlashcards] = useState([])
  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const [flashcardTerm, setFlashcardTerm] = useState('');
  // const [flashcardBody, setFlashcardBody] = useState('');
  // const [editTerm, setEditTerm] = useState('');
  // const [editBody, setEditBody] = useState('');
  // const history = useHistory();

  // const categoryEl = useRef()
  // const amountEl = useRef()

  // useEffect(() => {
  //   axios
  //     .get('https://')
  //     .then(res => {
  //       // console.log(res.data) 
  //       setCategories(res.data.trivia_categories)
  //     })
  // }, [])

  // useEffect(() => {
   
  // }, [])

  // function decodeString(str) {
  //   const textArea = document.createElement('textarea')
  //   textArea.innerHTML= str
  //   return textArea.value
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   axios
  //   .get('https://opentdb.com/api.php', {
  //     params: {
  //       amount: amountEl.current.value,
  //       category: categoryEl.current.value
  //     }
  //   })
  //   .then(res => {
  //     setFlashcards(res.data.results.map((questionItem, index) => {
  //       const answer = decodeString(questionItem.correct_answer)
  //       const options = [
  //         ...questionItem.incorrect_answers.map(a => decodeString(a)),
  //         answer
  //       ]
  //       return {
  //         id: `${index}-${Date.now()}`,
  //         question: decodeString(questionItem.question),
  //         answer: answer,
  //         options: options.sort(() => Math.random() - .5)
  //       }
  //     }))
  //   })
  // }

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //   const updatedFlashcard = { id, term: editTerm, datetime, body: editBody };
  //   try {
  //     const response = await api.put(`/flashcards/${id}`, updatedFlashcard);
  //     setFlashcards(flashcards.map(flashcard => flashcard.id === id ? { ...response.data } : flashcard));
  //     setEditTerm('');
  //     setEditBody('');
  //     history.push('/');
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/flashcards/${id}`);
  //     const flashcardsList = flashcards.filter(flashcard => flashcard.id !== id);
  //     setFlashcards(flashcardsList);
  //     history.push('/');
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }

  // console.log('Rendering App component');

  //return (
  //   <Routes>
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<Public />} />
  //     <Route path="login" element={<Login />} />
  //     <Route path="dash" element={<DashLayout />}>
  //       <Route index element={<Welcome />} />
  //       <Route path="flashcard">
  //         <Route index element={<FlashcardPage />} />
  //       </Route>
  //       <Route path="addFlashcard">
  //         <Route index element={<AddFlashcard />} />
  //       </Route>
  //       <Route path="users">
  //         <Route index element={<UsersList />} />
  //       </Route>
  //     </Route>
  //   </Route>
  // </Routes>
  // )


//older info 

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


// do it for the add yuh!