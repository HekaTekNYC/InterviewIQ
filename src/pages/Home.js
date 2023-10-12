import React from 'react'
import NavbarHome from '../components/navbar/navbarHome/NavbarHome'
import ShowCategoryCardList from '../components/categories/showCategoryCardList/ShowCategoryCardList'
import ShowSubCardList from '../components/subcategories/showSubCardList/showSubCardList'

const Home = () => {
  return (
   <>
    <NavbarHome />
    
    {/* <div className='bg-gradient-to-r from-blue-200 to-blue-100'> */}
    <div className='bg-white-200'>
      <div className="py-20 p-4 header-container flex-row">
        <h1 className='text-center text-3xl'>Pick A Category</h1>
      </div>
      <div className="card-list">
        <ShowCategoryCardList/>
          {/* <ShowSubCardList/> */}
      </div>
    
      </div>
    
    </>
  )
}

export default Home