import React from "react";
import { Link } from 'react-router-dom';
import NavbarHome from "../components/navbar/navbarHome/NavbarHome";
import PillButton from "../shared/components/UIElements/pillButton";
import CategoryList from "../components/categories/categoryList/CategoryList";
import StudyWoman  from "../img/Studywoman.svg";


const Home = () => {
  return (
    <>
        <NavbarHome />
     
      <div className="h-screen bg-background">
        <div className= "hero-container container mx-auto ">
          <div className="flex flex-row py-40 max-h-fit">
          <div className="flex content-center">
          <div className="basis-1/3 text-white">
          <img src={StudyWoman} alt="StudyWoman"  />
          </div>
          
          <div className="flex flex-col justify-center items-center basis-2/3 text-white  px-5 pr-10">
            <h1 className="text-5xlb pb-5 text-center">
            Your Free Interview Prep Flashcard App!
            </h1>
            <p className="text-xl pt-5 text-center pb-10">
            We should consider what we want to be displayed here. Maybe we say something along the lines of...We don't send out any spam email. You will only be using your email to create your account which saves your created flashcards to.
            {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  */}
            </p>

            <Link to="/signup">
              <PillButton text="Sign Up For Free!"/>
            </Link>
          </div>
          </div>
          </div>

        </div>
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 cat-container">
          <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            <h1 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Pick A Category</h1>
          </div>
          <div className="overflow-y-auto">
            <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 ">
              <CategoryList />
            </div>
          </div>
            {/* <CategoryList /> */}
        </div>
      </div>
    </>
  );
};

export default Home;


