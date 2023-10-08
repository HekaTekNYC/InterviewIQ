import React from 'react'
import NavbarHome from '../components/navbar/navbarHome/NavbarHome'
import FlashcardCategoriesList from '../components/flashcard/flashcardCategories/FlashcardCategoriesList'

const Home = () => {
  return (
   <>
    <NavbarHome />
    {/* <div className='bg-gradient-to-r from-blue-200 to-blue-100'> */}
    <div className='bg-blue-200'>
      <div className='category-container'>
          <FlashcardCategoriesList/>
      </div>
    </div>
    
    </>
  )
}

export default Home