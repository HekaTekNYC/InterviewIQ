import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useCallback } from "react";
import Home from "./pages/Home";
import "./pages/home.styles.css";
import CategoryList from "./components/categories/categoryList/CategoryList";
import Login from "./components/navbar/navbarHome/LogIn";
import SubList from "./components/subcategories/subList/subList";
// import NewFlashcard from "./components/flashcard/pages/NewFlashcard";
// import UserFlashcards from "./components/flashcard/pages/UserFlashcards";
// import UpdateFlashcard from "./components/flashcard/pages/UpdateFlashcard";
import Auth from './user/pages/Auth'
import { AuthContext } from "./shared/context/auth-context";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Register from "./components/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <MainNavigation />
              <main>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/:categoryId/categories" element={<CategoryList />} />
                  <Route path="/api/subcategories" element={<SubList />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </>
          }
        />

        <Route
          path="/auth"
          element={
            isLoggedIn ? <Navigate to="/" /> : <Auth />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;






// import { Routes, Route, Navigate, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import "./pages/home.styles.css";
// import CategoryList from "./components/categories/categoryList/CategoryList";
// // import CreateFlashcard from "./components/flashcard/createFlashcard/CreateFlashcard";
// // import UpdateFlashcard from "./components/flashcard/updateFlashcard/UpdateFlashcard";
// // import Flashcard from "./components/flashcard/flashcardComponent/Flashcard";
// import Login from "./components/navbar/navbarHome/LogIn";
// import SubList from "./components/subcategories/subList/subList"
// import Users from "./user/pages/Users";
// import NewFlashcard from './components/flashcard/pages/NewFlashcard'
// import UserFlashcards from './components/flashcard/pages/UserFlashcards'
// import UpdateFlashcard from './components/flashcard/pages/UpdateFlashcard'
// import Auth from './components/user/pages/Auth';
// import { AuthContext } from './shared/context/auth-context'
// import MainNavigation from './shared/components/Navigation/MainNavigation'

// import Register from "./components/Register";

// function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = useCallback(() => {
//     setIsLoggedIn(true);
//   }, []);

//   const logout = useCallback(() => {
//     setIsLoggedIn(false);
//   }, []);

//   let router;

//   if (isLoggedIn) {
//     router = (
//       <Switch>
//         <Route path="/" exact>
//           <Users />
//         </Route>
//         <Route path="/:userId/places" exact>
//           <UserFlashcards />
//         </Route>
//         <Route path="/places/new" exact>
//           <NewFlashcard />
//         </Route>
//         <Route path="/places/:placeId">
//           <UpdateFlashcard />
//         </Route>
//         <Navigate to="/" />
//       </Switch>
//     );
//   } else {
//     router = (
//       <Switch>
//         <Route path="/" exact>
//           <Users />
//         </Route>
//         <Route path="/:userId/flashcards" exact>
//           <UserFlashcards />
//         </Route>
//         <Route path="/auth">
//           <Auth />
//         </Route>
//         <Navigate to="/auth" />
//       </Switch>
//     );
//   }


//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
//     >
//       <Routes>
//         <MainNavigation />
//         <main>{router}</main>
//         <Route path="/" element={<Home />} />
//         <Route path="/:categoryId/categories" element={<CategoryList />} />
//         <Route path="/api/subcategories" element={<SubList />} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//       </AuthContext.Provider>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import "./pages/home.styles.css";
// import CreateFlashcard from "./components/flashcard/createFlashcard/CreateFlashcard";
// import UpdateFlashcard from "./components/flashcard/updateFlashcard/UpdateFlashcard";
// import Flashcard from "./components/flashcard/flashcardComponent/Flashcard";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import SubList from './components/subcategories/subList/subList';
// import Auth from './user/pages/Auth';
// import MainNavigation from './components/Navigation/MainNavigation';

// function App() {
//   return (
//     <div>
//       {/* <NavBar/> */}
//       <Router>
//         <Route path="/" exact>
//           <Home />
//           <Navigate replace to="/home" />
//         </Route>

//         {/* <Route path="/create-flashcard" element={<CreateFlashcard />} />
//         <Route path="/update-flashcard" element={<UpdateFlashcard />} />
//         <Route path="/edit-flashcard/:id" element={<Flashcard />} /> */}
//       </Router>
//     </div>
//   );
// }

// export default App;
