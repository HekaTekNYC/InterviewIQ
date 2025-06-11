import React from "react"
import {Link} from "react-router-dom"
// import NavbarHome from "../components/navbar/navbarHome/NavbarHome"
// import PillButton from "../components/UI/pillButton"
// import CategoryList from "../components/categories/categoryList/CategoryList"
// import StudyWoman from "../img/Studywoman.svg"

const Home = () => {
  return (
    <>
      {/* <NavbarHome /> */}

      <div className="h-screen bg-background">
        <div className="hero-container container mx-auto ">
          <div className="flex flex-row py-80 pt-80 items-center ">
            <div className="flex content-center ">
              <div className="basis-1/3 text-white">
                {/* <img src={StudyWoman} alt="StudyWoman" /> */}
              </div>

              <div className="flex flex-col justify-center items-center basis-2/3 text-white  px-20 pr-10">
                <h1 className="text-4xlb pb-2 text-center">
                  The Ultimate Flashcard App for Coding Interviews
                </h1>
                <p className="text-md pt-2 text-center pb-5 leading-7 text-lg">
                  Master the essential coding concepts and ace your interviews
                  with our comprehensive, free flashcard app. Designed for
                  developers at all levels, our app offers a variety of practice
                  questions and detailed explanations to help you prepare
                  efficiently and effectively. Start your journey towards
                  success today and turn your coding challenges into
                  opportunities!
                </p>

                {/* <Link to="/signup">
                  <PillButton text="Sign Up For Free" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 cat-container">
          <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            <h1 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Pick A Category</h1>
          </div>
          <div className="overflow-y-auto">
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 ">
              <CategoryList />
            </div>
          </div>
      
        </div> */}
      </div>
    </>
  )
}

export default Home
