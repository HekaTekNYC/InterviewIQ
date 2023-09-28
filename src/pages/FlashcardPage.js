import React from 'react'
import Flashcard from '../components/flashcards/Flashcard'
import AddFlashcard from '../components/flashcards/AddFlashcard'
import '../components/flashcards/flashcard.styles.css'

const FlashcardPage = () => {
  return (
    <>
     /*This is the code for the flashcard flip */
    <div>
      <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h1>This is my Term</h1>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    </div>
    <div className="flip-card-back">
      <h1>Definition</h1>
      <p>We need to figure out how to pull MongoDB info onto card</p>
    </div>
  </div>
</div>
</div>
    <Flashcard/>
    <AddFlashcard/>
    </>
  )
}

export default FlashcardPage