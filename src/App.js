import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateFlashcard from './components/flashcard/createFlashcard/CreateFlashcard'
import UpdateFlashcard from './components/flashcard/updateFlashcard/UpdateFlashcard'
import Flashcard from './components/flashcard/flashcardComponent/Flashcard'


function App() {
  
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        {/* <Route exact path='/show-flashcard-list' element={<ShowFlashcardList/>} /> */}
        {/* <Route exact path='/subcategories-list' element={<ShowSubCardList/>} /> */}
        <Route path='/create-flashcard' element={<CreateFlashcard />} />
        <Route path='/update-flashcard' element={<UpdateFlashcard />} />
        <Route path='/edit-flashcard/:id' element={<Flashcard />} />
        
      </Routes>
  </div>
   );
  }
  
  export default App;
  


