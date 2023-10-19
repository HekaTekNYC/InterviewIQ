import React, { useState, useEffect } from "react";
import NavbarHome from "../components/navbar/navbarHome/NavbarHome";
import CategoryList from "../components/categories/categoryList/CategoryList";
import ErrorModal from "../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../shared/components/hooks/httpHook";

const Home = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Before fetch request");
        const responseData = await sendRequest(
          "http://localhost:3500/api/categories"
        );
        console.log("responseData in Home", responseData);
        const categories = responseData.categories;

        console.log("Categories before setting state:", categories);

        setCategories(responseData);
      } catch (err) {
        // Handle errors
      }
    };
    fetchCategories();
  }, [sendRequest]);

  return (
    <>
      {" "}
      <NavbarHome />{" "}
      {/* <Login /> /} {/ <div className="flex justify-center items-center text-xl mt-4 card-container rounded-lg drop-shadow-md p-4 m-2 hover:shadow-x1 bg-blue-100"> <h3>{category.name}</h3> </div> */}
      {/* <div className='bg-gradient-to-r from-blue-200 to-blue-100'> */}
      <div className="bg-white-200">
        <div className="py-20 p-4 header-container flex-row">
          <h1 className="text-center text-3xl">Pick A Category</h1>
        </div>
        <div className="card-list">
          <ErrorModal error={error} onClear={clearError} />
          {isLoading && (
            <div className="center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && Categories && <CategoryList categories={Categories} />}
        </div>
      </div>
    </>
  );
};

export default Home;
