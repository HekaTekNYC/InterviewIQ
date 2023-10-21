import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./pages/home.styles.css";
import CategoryList from "./components/categories/categoryList/CategoryList";
import CreateFlashcard from "./components/flashcard/createFlashcard/CreateFlashcard";
import UpdateFlashcard from "./components/flashcard/updateFlashcard/UpdateFlashcard";
import Flashcard from "./components/flashcard/flashcardComponent/Flashcard";
import Login from "./components/navbar/navbarHome/LogIn";


import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId/categories" element={<CategoryList />} />
        <Route path="/api/subcategories" element={<SubList />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import "./pages/home.styles.css";
// import CreateFlashcard from "./components/flashcard/createFlashcard/CreateFlashcard";
// import UpdateFlashcard from "./components/flashcard/updateFlashcard/UpdateFlashcard";
// import Flashcard from "./components/flashcard/flashcardComponent/Flashcard";
// import Login from "./components/Login";
// import Register from "./components/Register";

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
